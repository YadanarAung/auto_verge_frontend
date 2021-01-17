import { AuthService } from 'src/app/services/auth.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  config: any;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.config = environment
  }
  /* users */
  getUsers() {
    let url = this.config.baseUrl + "users";
    return this.http.get(url, this.auth.getAuthHeader());
  }

  createUser(form) {
    let url = this.config.baseUrl + "users";
    return this.http.post(url, form, this.auth.getAuthHeader());
  }

  updateUser(form, id) {
    let url = this.config.baseUrl + "users" + "/" + id;
    return this.http.put(url, form, this.auth.getAuthHeader());
  }

  deleteUser(id) {
    let url = this.config.baseUrl + "users/"+id;
    return this.http.delete(
      url,
      this.auth.getAuthHeader()
    );
  }

  getUser(id) {
    let url = this.config.baseUrl + "users" + "/" + id;
    return this.http.get(url, this.auth.getAuthHeader());
  }

  /* customers */
  getCustomers() {
    let url = this.config.baseUrl + "customers";
    return this.http.get(url, this.auth.getAuthHeader());
  }

  createCustomer(form) {
    let url = this.config.baseUrl + "customers";
    return this.http.post(url, form, this.auth.getAuthHeader());
  }

  updateCustomer(form, id) {
    let url = this.config.baseUrl + "customers" + "/" + id;
    return this.http.put(url, form, this.auth.getAuthHeader());
  }

  deleteCustomer(id) {
    let url = this.config.baseUrl + "customers/"+id;
    return this.http.delete(
      url,
      this.auth.getAuthHeader()
    );
  }

  getCustomer(id) {
    let url = this.config.baseUrl + "customers" + "/" + id;
    return this.http.get(url, this.auth.getAuthHeader());
  }

  /* services */
  getServices() {
    let url = this.config.baseUrl + "services";
    return this.http.get(url, this.auth.getAuthHeader());
  }

  createService(form) {
    let url = this.config.baseUrl + "services";
    return this.http.post(url, form, this.auth.getAuthHeader());
  }

  updateService(form, id) {
    let url = this.config.baseUrl + "services" + "/" + id;
    return this.http.put(url, form, this.auth.getAuthHeader());
  }

  deleteService(id) {
    let url = this.config.baseUrl + "services/"+id;
    return this.http.delete(
      url,
      this.auth.getAuthHeader()
    );
  }
  
  getService(id) {
    let url = this.config.baseUrl + "services" + "/" + id;
    return this.http.get(url, this.auth.getAuthHeader());
  }

  /* Booking */
  getBookings() {
    let url = this.config.baseUrl + "bookings";
    return this.http.get(url, this.auth.getAuthHeader());
  }

  createBooking(form) {
    let url = this.config.baseUrl + "bookings";
    return this.http.post(url, form, this.auth.getAuthHeader());
  }

  updateBooking(form, id) {
    let url = this.config.baseUrl + "bookings" + "/" + id;
    return this.http.put(url, form, this.auth.getAuthHeader());
  }

  deleteBooking(id) {
    let url = this.config.baseUrl + "bookings/"+id;
    return this.http.delete(
      url,
      this.auth.getAuthHeader()
    );
  }

}
