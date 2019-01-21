import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {  AppService } from '../shared/app.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _dataService: AppService, private router: Router) { }

  canActivate(){
   if(this._dataService.isLoggedIn()) return true;

   this.router.navigate([""]);  return false;
  }
}
