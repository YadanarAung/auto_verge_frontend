import { AuthService } from 'src/app/services/auth.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  config: any;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.config = environment
  }

  getAllCountry() {
    let url = this.config.baseUrl + "countries/getAll";
    return this.http.get(url);
  }
}
