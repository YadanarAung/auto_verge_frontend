import { CountryService } from './../../services/country.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user:any = {};
  countries:any = [];
  userInfoFormValidation: FormGroup;
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;
  constructor(private auth:AuthService, private countrySvc: CountryService, private fb: FormBuilder) { 
  }

  ngOnInit() {

    this.userInfoFormValidation = this.fb.group(
      {
        first_name: [null, Validators.required],
        last_name: [null, Validators.required],
        full_name: [null, Validators.required],
        country_id: [null, Validators.required],
        zip_code: [null, Validators.required],
        mps_register_no: [null, Validators.required],
        phone: [null, Validators.required],
        address: [null, Validators.required],
        nrc: [null, Validators.required],
      }
    );
    this.auth.getAuthenticatedUser().subscribe((res:any)=>{
      this.user = res;
    });

    this.countrySvc.getAllCountry().subscribe((res: any) => {
      this.countries = res.data;
    });
  }

  update(){
    var that = this;
    let user = this.user;
    console.log(user);
    
    this.auth.updateInfo(user).subscribe(
      (res: any) => {
        this.message = "Update Successfully!"
        this.showMessage = true;
      },
      (error: any) => {
        if (error.status == 400) {
          this.showMessage = true;
          this.message = "Already register with this email!";
          this.isSuccess = false;
        } else if (error.status == 422) {
          that.message += "Please fill required data!";
        } else {
          this.message = "Update Fail!";
          this.showMessage = true;
          this.isSuccess = false;
        }
      }
    );
  }

}
