import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.scss"]
})
export class VerifyComponent implements OnInit {
  private verifyKey: string;
  private id: string;
  constructor(
    public activeRouter: ActivatedRoute,
    private auth: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      this.verifyKey = params.get("verify_key");
      this.id = params.get("id");
    });
  }

  verify() {
    this.auth.verifyEmail(this.id, this.verifyKey).subscribe((res: any) => {
      this.auth.setToken(res.access_token);
      this.auth.getAuthenticatedUser().subscribe((authUser: any) => {
        localStorage.setItem("_loggedInUser", JSON.stringify(authUser));
        this.auth.setLoggedInUser(authUser);
        this.router.navigate(["/dashboard"]);
      });
    });
  }
}
