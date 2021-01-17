import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private config: any;
  private token: any = localStorage.getItem("_access_token") || null;
  private loggedInUser: any = localStorage.getItem("_loggedInUser")
    ? JSON.parse(localStorage.getItem("_loggedInUser"))
    : {};
  constructor(private http: HttpClient) {
    this.config = environment;
  }

  getAuthHeader() {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token
      })
    };
    return httpOptions;
  }

  getFormDataAuthHeader() {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + this.token
      })
    };
    return httpOptions;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("_access_token", token);
  }

  getToken() {
    return this.token;
  }

  setLoggedInUser(user) {
    this.loggedInUser = user;
    localStorage.setItem("_loggedInUser", JSON.stringify(user));
  }

  login(userObj) {
    let url = this.config.baseUrl + "login";
    return this.http.post(url, userObj);
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem("_access_token");
    localStorage.removeItem("_loggedInUser");
    let url = this.config.baseUrl + "logout";
    return this.http.post(url, {}, this.getAuthHeader());
  }

  refreshToken() {
    let url = this.config.baseUrl + "refresh";
    return this.http.post(url, {}, this.getAuthHeader());
  }

  getAuthenticatedUser() {
    let url = this.config.baseUrl + "me";
    return this.http.get(url, this.getAuthHeader());
  }

  isLoggedIn() {
    return this.loggedInUser ? true : false;
  }

  register(userObj) {
    let url = this.config.baseUrl + "register";
    return this.http.post(url, userObj);
  }

  updateInfo(userObj) {
    let url = this.config.baseUrl + "updateInfo";
    return this.http.put(url, userObj, this.getAuthHeader());
  }

  uploadPayment(userObj) {
    let url = this.config.baseUrl + "addPayment";
    return this.http.post(url, userObj, this.getAuthHeader());
  }

  changePassword(userObj) {
    let url = this.config.baseUrl + "changePassword";
    return this.http.post(url, userObj, this.getAuthHeader());
  }

  verifyEmail(id, key) {
    let url = this.config.baseUrl + "emailVerify";
    return this.http.put(url, { verify_key: key, id: id });
  }

  forgotPassword(email) {
    let url = this.config.baseUrl + "forgotPassword";
    return this.http.put(url, { email: email });
  }
}
