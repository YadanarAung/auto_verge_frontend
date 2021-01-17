import { ContestService } from "./../../services/contest.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  contests: any = [];
  errorMessage: string;
  uploadSuccess: boolean = false;

  photo: any = {};
  message: string;
  showMessage: boolean = false;
  isSuccess: boolean = false;

  allowExtensions = ["image/jpeg", "image/jpg", "image/png"];

  constructor(
    private auth: AuthService,
    public router: Router,
    private contestSvc: ContestService
  ) {
    this.auth.getAuthenticatedUser().subscribe((res: any) => {
      this.photo.previewUrl = res.paymentUrl;
      if (res.paymentUrl == "") {
        this.photo.previewUrl = "assets/images/default.jpg";
      }
    });
  }

  ngOnInit() {
    this.initHome();
  }

  initHome() {
    var that = this;
    this.contestSvc.getAllContests().subscribe(
      (res: any) => {
        this.contests = res.data;

        this.contests.map(obj => {
          obj.disableButton = false;
          obj.showLoading = false;
          obj.competition_photo_1.error = false;
          obj.competition_photo_2.error = false;
          obj.competition_photo_3.error = false;
          obj.competition_photo_4.error = false;

          obj.competition_photo_1.nameError = false;
          obj.competition_photo_2.nameError = false;
          obj.competition_photo_3.nameError = false;
          obj.competition_photo_4.nameError = false;

          obj.competition_photo_1.photo_no = 1;
          obj.competition_photo_2.photo_no = 2;
          obj.competition_photo_3.photo_no = 3;
          obj.competition_photo_4.photo_no = 4;

          if (obj.competition_photo_1.previewUrl == "") {
            obj.competition_photo_1.previewUrl = "assets/images/default.jpg";
            obj.competition_photo_1.photo_no = 0;
          }

          if (obj.competition_photo_2.previewUrl == "") {
            obj.competition_photo_2.previewUrl = "assets/images/default.jpg";
            obj.competition_photo_2.photo_no = 0;
          }

          if (obj.competition_photo_3.previewUrl == "") {
            obj.competition_photo_3.previewUrl = "assets/images/default.jpg";
            obj.competition_photo_3.photo_no = 0;
          }

          if (obj.competition_photo_4.previewUrl == "") {
            obj.competition_photo_4.previewUrl = "assets/images/default.jpg";
            obj.competition_photo_4.photo_no = 0;
          }
        });
      },
      (error: any) => {
        //  alert(JSON.stringify(error))
        if (error.status == 401) {
          this.logout();
        }
      }
    );
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  fileProgress(fileInput: any, photo) {
    let file = <File>fileInput.target.files[0];

    let maxSize = file.size * 0.000001;
    let type = file.type;

    //check file extension
    if (this.allowExtensions.indexOf(type) == -1) {
      photo.error = true;
      this.errorMessage = "File extension is not allowed!";
      $("#dialogMsg").show();
      return false;
    }
    //check file size
    if (maxSize > 3) {
      photo.error = true;
      this.errorMessage = "Maximum file size is 3MB!";
      $("#dialogMsg").show();
      return false;
    }
    photo.error = false;
    photo.image = file;
    photo.extension = file.type.split("/").pop();
    this.preview(photo);
  }

  preview(photo) {
    // Show preview
    var mimeType = photo.image.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(photo.image);
    reader.onload = _event => {
      photo.oldUrl = photo.previewUrl;
      photo.previewUrl = reader.result;
      photo.image = reader.result;
    };
  }

  saveCompetition(contest) {
    contest.disableButton = true;
    contest.showLoading = true;
    
    var now = new Date();
    var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();

    var closeDay = new Date(contest.main_contest.end_date);
    var today = new Date(date);

    if (today >= closeDay) {
      this.errorMessage = "This Photo Contest is expired!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      return false;
    }

    let saveContest: any = {
      contest_id: contest.id,
      main_contest_id: contest.main_contest.id,
      competition_photo_1: {
        name: contest.competition_photo_1.name,
        image: contest.competition_photo_1.image,
        extension: contest.competition_photo_1.extension
      },
      competition_photo_2: {
        name: contest.competition_photo_2.name,
        image: contest.competition_photo_2.image,
        extension: contest.competition_photo_2.extension
      },
      competition_photo_3: {
        name: contest.competition_photo_3.name,
        image: contest.competition_photo_3.image,
        extension: contest.competition_photo_3.extension
      },
      competition_photo_4: {
        name: contest.competition_photo_4.name,
        image: contest.competition_photo_4.image,
        extension: contest.competition_photo_4.extension
      }
    };

    if (
      saveContest.competition_photo_1.image == "" &&
      saveContest.competition_photo_2.image == "" &&
      saveContest.competition_photo_3.image == "" &&
      saveContest.competition_photo_4.image == "" &&
      saveContest.competition_photo_1.name == "" &&
      saveContest.competition_photo_2.name == "" &&
      saveContest.competition_photo_3.name == "" &&
      saveContest.competition_photo_4.name == ""
    ) {
      // this.errorMessage = "Please upload at least one photo!";
      // $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
    } else {
      //update
      if (contest.competition_id) {
        //check title is blank?
        let valid = this.validationUpdate(contest);
        if (valid) {
          this.contestSvc
            .updateCompletition(saveContest, contest.competition_id)
            .subscribe(
              res => {
                this.errorMessage = "Upload Photo Successfully!";
                this.uploadSuccess = true;
                //this.ngOnInit();
                // this.initHome();
                $("#dialogMsg").show();
              },
              (error: any) => {
                this.ngOnInit();
                if (error.status == 422) {
                  // alert('You need to upload at least one photo ')
                  this.errorMessage = "Please upload at least one photo!";
                  $("#dialogMsg").show();
                } else {
                  this.errorMessage = "Internal server error!";
                  $("#dialogMsg").show();
                }
              }
            );
        }
      } else {
        //check title is blank?
        let valid = this.validation(contest);

        if (valid) {
          this.contestSvc.saveCompletition(saveContest).subscribe(
            res => {
              //this.ngOnInit();
              // this.initHome();
              this.errorMessage = "Upload Photo Successfully!";
              this.uploadSuccess = true;
              $("#dialogMsg").show();
            },
            (error: any) => {
              this.ngOnInit();
              if (error.status == 422) {
                // alert('You need to upload at least one photo ')
                this.errorMessage = "Please upload at least one photo!";
                $("#dialogMsg").show();
              } else {
                this.errorMessage = "Internal server error!";
                $("#dialogMsg").show();
              }
            }
          );
        }
      }
    }
  }

  hideDialog() {
    if (this.uploadSuccess) {
      window.location.reload();
    }
    $("#dialogMsg").hide();
  }

  paymentFileProgress(fileInput: any) {
    this.photo.image = <File>fileInput.target.files[0];
    this.paymentPreview(this.photo);
  }

  paymentPreview(photo) {
    // Show preview
    var mimeType = photo.image.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(photo.image);
    reader.onload = _event => {
      photo.previewUrl = reader.result;
      photo.image = reader.result;
    };
  }

  deleteImage(photo, competitionId, main_contest_id) {
    var that = this;
    photo.error = false;
    if (photo.oldUrl) {
      photo.previewUrl = photo.oldUrl;
      photo.error = false;
      photo.image = "";
    } else {
      if (photo.photo_no) {
        this.contestSvc
          .deleteImage(competitionId, main_contest_id, photo.photo_no)
          .subscribe(
            (res: any) => {
              that.initHome();
            },
            (error: any) => {
              console.log(error);
            }
          );
      }
    }
  }

  uploadPayslip() {
    if (this.photo.image) {
      this.auth.uploadPayment({ image: this.photo.previewUrl }).subscribe(
        (res: any) => {
          this.message = "Upload Payment Slip Successfully!";
          this.showMessage = true;
          this.isSuccess = true;
        },
        (error: any) => {
          if (error.status == 422) {
            // alert('You need to upload at least one photo ')
            this.message = "Please upload photo!";
            this.isSuccess = false;
          } else {
            this.message = "Internal server error!";
            this.isSuccess = false;
          }
        }
      );
    }
  }

  validation(contest) {
    let valid = true;
    //check image first
    if (
      contest.competition_photo_1.image != "" &&
      contest.competition_photo_1.name.trim() == ""
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_1.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_2.image != "" &&
      contest.competition_photo_2.name.trim() == ""
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_2.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_3.image != "" &&
      contest.competition_photo_3.name.trim() == ""
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_3.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_4.image != "" &&
      contest.competition_photo_4.name.trim() == ""
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_4.nameError = true;
      valid = false;
    }

    //check image title first
    if (
      contest.competition_photo_1.image == "" &&
      contest.competition_photo_1.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_1.error = true;
      valid = false;
    }

    if (
      contest.competition_photo_2.image == "" &&
      contest.competition_photo_2.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_2.error = true;
      valid = false;
    }

    if (
      contest.competition_photo_3.image == "" &&
      contest.competition_photo_3.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_3.error = true;
      valid = false;
    }

    if (
      contest.competition_photo_4.image == "" &&
      contest.competition_photo_4.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_4.error = true;
      valid = false;
    }

    return valid;
  }

  validationUpdate(contest) {
    let valid = true;
    //check image first
    if (
      contest.competition_photo_1.image != "" &&
      contest.competition_photo_1.name.trim() == ""
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_1.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_2.image != "" &&
      contest.competition_photo_2.name.trim() == ""
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_2.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_3.image != "" &&
      contest.competition_photo_3.name.trim() == ""
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_3.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_4.image != "" &&
      contest.competition_photo_4.name.trim() == ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_4.nameError = true;
      valid = false;
    }

    //check old data
    if (
      contest.competition_photo_1.name.trim() == "" &&
      contest.competition_photo_1.photo_no != 0
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_1.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_2.name.trim() == "" &&
      contest.competition_photo_2.photo_no != 0
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_2.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_3.name.trim() == "" &&
      contest.competition_photo_3.photo_no != 0
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_3.nameError = true;
      valid = false;
    }

    if (
      contest.competition_photo_4.name.trim() == "" &&
      contest.competition_photo_4.photo_no != 0
    ) {
      this.errorMessage = "Image Title is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_4.nameError = true;
      valid = false;
    }

    //check image title first
    if (
      contest.competition_photo_1.image == "" &&
      contest.competition_photo_1.photo_no == 0 &&
      contest.competition_photo_1.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_1.error = true;
      valid = false;
    }

    if (
      contest.competition_photo_2.image == "" &&
      contest.competition_photo_2.photo_no == 0 &&
      contest.competition_photo_2.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_2.error = true;
      valid = false;
    }

    if (
      contest.competition_photo_3.image == "" &&
      contest.competition_photo_3.photo_no == 0 &&
      contest.competition_photo_3.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_3.error = true;
      valid = false;
    }

    if (
      contest.competition_photo_4.image == "" &&
      contest.competition_photo_4.photo_no == 0 &&
      contest.competition_photo_4.name.trim() != ""
    ) {
      this.errorMessage = "Image is required!";
      $("#dialogMsg").show();
      contest.disableButton = false;
      contest.showLoading = false;
      contest.competition_photo_4.error = true;
      valid = false;
    }

    return valid;
  }

  hideError(photo){
    photo.nameError = false;
  }
}
