import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
declare var $: any;
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings = [];
  public id:any;
  constructor(private commonSvc: CommonService) { }

  ngOnInit() {
    this.getBookings()
  }

  getBookings(){
    var that = this;
    this.commonSvc.getBookings().subscribe((res:any)=>{
        that.bookings = res.data;
    });
  }

  openDialog(dialogId, id){
    this.id = id;
    $("#"+dialogId).show();
  }

  hideDialog(dialogId) {
    $("#"+dialogId).hide();
  }

  deleteBooking(){
    this.commonSvc.deleteBooking(this.id).subscribe(
      (res: any) => {
        this.getBookings();
        this.hideDialog('dialogDelete')
      },
      (error: any) => {
        this.hideDialog('dialogDelete')
      })
  }

}
