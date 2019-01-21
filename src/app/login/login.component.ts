import { Component, OnInit } from '@angular/core';
import {  AppService } from '../shared/app.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data : Object;
  
  constructor(private _dataService: AppService, private router: Router) { }

  ngOnInit() {
    
  }
  loginBollen = true;
  loginUser(formData) {
   
    this._dataService.post(this._dataService.apiurl + "/api/auth", formData.value)
      .subscribe(res => {
        this.data = res;
       
        if (this.data) {
         console.log(this.data);
          localStorage.setItem("token", this.data['token']);
          
         this.router.navigate(['home']);
        }
      }, (err) => {
        this.loginBollen = false;
        console.log(err);
      });
  }
}
