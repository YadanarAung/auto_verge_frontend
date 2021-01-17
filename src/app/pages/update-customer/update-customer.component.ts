import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  id: any;
  customer: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private commonSvc: CommonService, public activeRouter: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.getCustomer()
    });
  }

  getCustomer(){
    var that = this;
    this.commonSvc.getCustomer(this.id).subscribe((res:any)=>{
      that.customer = res;
  });
  }

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);
      this.commonSvc.updateCustomer(form.value, this.id).subscribe(
        (res: any) => {
          this.message = "Update customer Successfully!";
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
            this.message = "Update customer Fail!";
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
