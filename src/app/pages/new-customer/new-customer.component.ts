import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  customer: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private commonSvc: CommonService, public router: Router) {}

  ngOnInit() {}

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);

      this.commonSvc.createCustomer(form.value).subscribe(
        (res: any) => {
          this.customer = {};
          this.message = "Add customer Successfully!";
          this.showMessage = true;
          this.isSuccess = true;
          this.router.navigate(["/dashboard/customers"]);
        },
        (error: any) => {
          if (error.status == 422) {
            this.message =
            "Please fill required fields!";
          this.showMessage = true;
          this.isSuccess = false;
          } else {
            this.message = "Add customer Fail!";
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
