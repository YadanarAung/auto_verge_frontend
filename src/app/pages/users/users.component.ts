import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = [];
  public adduser:any;
  public id:any;
  constructor(private commonSvc: CommonService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    var that = this;
    this.commonSvc.getUsers().subscribe((res:any)=>{
      that.users = res;
  });
  }

  openDialog(dialogId, id){
    this.id = id;
    $("#"+dialogId).show();
  }

  hideDialog(dialogId) {
    $("#"+dialogId).hide();
  }

  deleteUser(){
    this.commonSvc.deleteUser(this.id).subscribe(
      (res: any) => {
        this.getUsers();
        this.hideDialog('dialogDelete')
      },
      (error: any) => {
        this.hideDialog('dialogDelete')
      })
  }
}
