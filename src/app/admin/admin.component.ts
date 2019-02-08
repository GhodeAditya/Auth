import { Component, OnInit } from '@angular/core';
import {  AppService } from '../shared/app.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { from } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  uploadedFiles = []
  data = {}
  selectedFile: File;
  constructor(private _dataService: AppService) { }

  ngOnInit() {
  }


  onFileChanged(e){
    this.selectedFile = e.target.files[0];
  }
  loginBollen = true;
  dataSaved = true;

  submit(data){
    const formdata: FormData = new FormData();
    formdata.append("recfile", this.selectedFile, this.selectedFile.name);
    formdata.append("name", data.value.name);
    formdata.append("price", data.value.price +"$"); 
  
    this._dataService.post(this._dataService.apiurl + "/api/upload",formdata)
      .subscribe(res => {
        this.data = res;
        this.dataSaved = false;
      }, (err) => {
        this.loginBollen = false;
        console.log(err);
      });
  }
}
