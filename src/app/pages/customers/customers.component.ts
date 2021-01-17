import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
declare var $: any;
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers = [];
  public id:any;
  constructor(private commonSvc: CommonService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    var that = this;
    this.commonSvc.getCustomers().subscribe((res:any)=>{
      that.customers = res;
    // that.competitors = competitorList.filter(function(obj) {
    //   if(obj.contest_name)
    //     return obj;
    // });
    });
  }

  openDialog(dialogId, id){
    this.id = id;
    $("#"+dialogId).show();
  }

  hideDialog(dialogId) {
    $("#"+dialogId).hide();
  }

  deleteCustomer(){
    this.commonSvc.deleteCustomer(this.id).subscribe(
      (res: any) => {
        this.getCustomers();
        this.hideDialog('dialogDelete')
      },
      (error: any) => {
        this.hideDialog('dialogDelete')
      })
  }

}
