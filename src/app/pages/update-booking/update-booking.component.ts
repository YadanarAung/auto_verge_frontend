import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.scss']
})
export class UpdateBookingComponent implements OnInit {
  id: any;
  booking: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private commonSvc: CommonService, public activeRouter: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
  }

  update(form) {
    var that = this;
    if (form.valid) {
      console.log(form.value);
      this.commonSvc.updateBooking(form.value, this.id).subscribe(
        (res: any) => {
          this.booking = {};
          this.message = "Update booking Successfully!";
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
            this.message = "Update booking Fail!";
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
