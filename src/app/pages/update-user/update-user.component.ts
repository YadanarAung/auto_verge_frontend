import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CommonService } from './../../services/common.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id: any;
  user: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private commonSvc: CommonService, public activeRouter: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.getUser();
    });
  }

  getUser(){
    var that = this;
    this.commonSvc.getUser(this.id).subscribe((res:any)=>{
      that.user = res;
  });
  }

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);
      this.commonSvc.updateUser(form.value, this.id).subscribe(
        (res: any) => {
          this.message = "Update User Successfully!";
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
            this.message = "Update User Fail!";
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
