import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  loginFormValidation: FormGroup;
  constructor(
    private auth: AuthService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.loginFormValidation = fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    var that = this;
    let user = this.user;
    let userObj = { email: user.email, password: user.password};
   
    this.auth.login(userObj).subscribe(
      (res: any) => {
        this.auth.setToken(res.access_token);
        this.auth.getAuthenticatedUser().subscribe((authUser: any) => {
          localStorage.setItem("_loggedInUser", JSON.stringify(authUser));
          this.auth.setLoggedInUser(authUser);
          this.router.navigate(["/dashboard"]);
        });
      },
      (error: any) => {
        if (error.status == 422) {
          this.message = "Please fill required data!";
          this.showMessage = true;
          this.isSuccess = false;
        } else if (error.status == 401) {
          this.message = "User Name and Password doesn't match!";
          this.showMessage = true;
          this.isSuccess = false;
        } else {
          this.message = "Login Fail!";
          this.showMessage = true;
          this.isSuccess = false;
        }
      }
    );
  }
}
