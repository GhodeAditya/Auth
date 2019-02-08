import { Component, OnInit, Input } from '@angular/core';
import {  AppService } from '../../shared/app.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  @Input("isFavorite") isFavorite: boolean;

  constructor() { }

  ngOnInit() {
   //this.isFavorite = true;
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
  }
 
}
