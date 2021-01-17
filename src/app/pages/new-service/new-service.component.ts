import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent implements OnInit {

  service: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private commonSvc: CommonService, public router: Router) {}

  ngOnInit() {}

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);

      this.commonSvc.createService(form.value).subscribe(
        (res: any) => {
          this.service = {};
          this.message = "Add service Successfully!";
          this.showMessage = true;
          this.isSuccess = true;
          this.router.navigate(["/dashboard/services"]);
        },
        (error: any) => {
          if (error.status == 422) {
            this.message =
                "Please fill required fields!";
              this.showMessage = true;
              this.isSuccess = false;
          } else {
            this.message = "Add service Fail!";
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
