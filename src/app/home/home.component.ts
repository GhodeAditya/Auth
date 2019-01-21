import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import {  AppService } from '../shared/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   name:any;
  constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private _dataService: AppService) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("token");
    // this.router.navigate([""]);
  }
}
