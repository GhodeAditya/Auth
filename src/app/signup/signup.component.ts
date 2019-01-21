import { Component, OnInit } from '@angular/core';
import {  AppService } from '../shared/app.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data: any =[];
  constructor(private _dataService: AppService, private router: Router ) { }

  ngOnInit() {
  }
  loginBollen = true;
  loginUser(formData) {
    console.log(formData.value);
    this._dataService.post(this._dataService.apiurl + "/api/user", formData.value)
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.router.navigate(['']);
      },(err) => {
            this.loginBollen = false;
           console.log(err.error);
      });
  }
}
