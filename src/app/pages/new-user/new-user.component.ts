import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  user: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private commonSvc: CommonService, public router: Router) {}

  ngOnInit() {}

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);

      this.commonSvc.createUser(form.value).subscribe(
        (res: any) => {
          this.user = {};
          this.message = "Add User Successfully!";
          this.showMessage = true;
          this.isSuccess = true;
          this.router.navigate(["/dashboard/users"]);
        },
        (error: any) => {
          if (error.status == 422) {
            this.message =
                "Please fill required fields!";
              this.showMessage = true;
              this.isSuccess = false;
          } else {
            this.message = "Add User Fail!";
            this.showMessage = true;
            this.isSuccess = false;
          }
        }
      );
    } else {
      this.message =
        "Please fill required fields!";
      this.showMessage = true;
      this.isSuccess = false;
    }
  }

}
