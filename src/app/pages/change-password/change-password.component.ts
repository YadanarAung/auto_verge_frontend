import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"]
})
export class ChangePasswordComponent implements OnInit {
  user: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);

      this.auth.changePassword(form.value).subscribe(
        (res: any) => {
          this.user = {};
          this.message = "Change Password Successfully!";
          this.showMessage = true;
          this.isSuccess = true;
        },
        (error: any) => {
          if (error.status == 422) {
            console.log(error.error.errors);

            if (error.error.errors.hasOwnProperty("old_password")) {
              error.error.errors.old_password.forEach(function(obj) {
                that.message = obj;
              });
            }
            if (error.error.errors.hasOwnProperty("new_password")) {
              error.error.errors.new_password.forEach(function(obj) {
                that.message += obj;
              });
            }

            this.showMessage = true;
            //this.message = "The old password does not match!";
            this.isSuccess = false;
          } else {
            this.message = "Change Password Fail!";
            this.showMessage = true;
            this.isSuccess = false;
          }
        }
      );
    } else {
      this.message =
        "Please fill the old password, new password and confirm password!";
      this.showMessage = true;
      this.isSuccess = false;
    }
  }
}
