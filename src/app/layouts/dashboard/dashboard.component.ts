import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public loggedInUser: any = localStorage.getItem("_loggedInUser")
    ? JSON.parse(localStorage.getItem("_loggedInUser"))
    : {};
  constructor(private auth: AuthService, public router: Router) {}

  ngOnInit() {
    //check for current user
    this.auth.getAuthenticatedUser().subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          localStorage.setItem("_loggedInUser", JSON.stringify(res));
          this.auth.setLoggedInUser(res);
        }
      },
      (res: any) => {
        this.logout();
        //if this get 401 error, user should be loggedout
      }
    );
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(["/"]);
    });
  }
}
