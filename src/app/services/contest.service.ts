import { AuthService } from "src/app/services/auth.service";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContestService {
  config: any;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.config = environment;
  }

  getAllContests() {
    let url = this.config.baseUrl + "contests/getAll";
    return this.http.get(url, this.auth.getAuthHeader());
  }

  saveCompletition(form) {
    let url = this.config.baseUrl + "competitions";
    return this.http.post(url, form, this.auth.getAuthHeader());
  }

  updateCompletition(form, id) {
    let url = this.config.baseUrl + "competitions" + "/" + id;
    return this.http.put(url, form, this.auth.getAuthHeader());
  }

  deleteImage(id, mainContestId, photo) {
    let url = this.config.baseUrl + "competitions/deleteImage";
    return this.http.post(
      url,
      { id: id, main_contest_id: mainContestId, photo_no: photo },
      this.auth.getAuthHeader()
    );
  }

  competitors(){
    let url = this.config.baseUrl + "services";
    return this.http.get(url);
  }

  contestReport(){
    let url = this.config.baseUrl + "totalCompetition";
    return this.http.get(url);
  }
}
