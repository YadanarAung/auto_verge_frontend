import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
declare var $: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services = [];
  public id:any
  constructor(private commonSvc: CommonService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices(){
    var that = this;
    this.commonSvc.getServices().subscribe((res:any)=>{
      that.services = res;
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

  deleteService(){
    this.commonSvc.deleteService(this.id).subscribe(
      (res: any) => {
        this.getServices();
        this.hideDialog('dialogDelete')
      },
      (error: any) => {
        this.hideDialog('dialogDelete')
      })
  }

}
