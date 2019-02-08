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
   data:any =[];
   cartData:any =[]; 
   thmbnailImag:any;
 
   
  constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private _dataService: AppService) { }

  ngOnInit() {
    this.getData();
  }

  logout(){
    localStorage.removeItem("token");
  }

  getData(){
    this._dataService.get(this._dataService.apiurl + "/api/upload")
    .subscribe(res => {
      this.data = res;
      console.log(this.data);

      this.thmbnailImag = "http://localhost:3000/" + this.data[0].filePath;
    }, (err) => {
      console.log(err);
    });
   }
   
   post = {
    Tittle: "tittle", 
    isFavorite: true
   }

}
