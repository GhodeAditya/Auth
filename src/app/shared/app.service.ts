import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  apiurl = "http://localhost:3000"

  constructor(private http : HttpClient) { }

  post(url, data, options?){
    return this.http.post(url, data, options);
  }
  get(url){
    return this.http.get(url);
  }
  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if(!token){
      return false
    }
   
   if(jwtHelper.isTokenExpired(token)) return false;

   
   return true;
  }
  getCurrentUser(){
    let token = localStorage.getItem("token");
    return new JwtHelperService().decodeToken(token);
  }
}
