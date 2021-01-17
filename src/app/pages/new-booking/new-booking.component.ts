import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {

  public customers = [];
  public services = [];
  
  booking: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private commonSvc: CommonService, public router: Router) {}

  ngOnInit() {
    this.getCustomers();
    this.getServices();
  }

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);

      this.commonSvc.createBooking(form.value).subscribe(
        (res: any) => {
          this.booking = {};
          this.message = "Add booking Successfully!";
          this.showMessage = true;
          this.isSuccess = true;
          this.router.navigate(["/dashboard/bookings"]);
        },
        (error: any) => {
          if (error.status == 422) { 
            this.message =
            "Please fill required fields!";
            this.showMessage = true;
            this.isSuccess = false;
          } else {
            this.message = "Add booking Fail!";
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

  getCustomers(){
    var that = this;
    this.commonSvc.getCustomers().subscribe((res:any)=>{
      that.customers = res;
    });
  }

  getServices(){
    var that = this;
    this.commonSvc.getServices().subscribe((res:any)=>{
      that.services = res;
  });
  }

}
