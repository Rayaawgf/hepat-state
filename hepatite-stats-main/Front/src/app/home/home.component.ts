import { Wilaya } from './../models/wilaya.model';
import { Data } from './../models/data.model';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-ilem.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = new Data();
  wilayas = this.data.wilayas;

  menuItems: MenuItem[] = [];

  ngOnInit(){
    this.wilayas.forEach((wilaya:Wilaya)=>{
      this.menuItems.push({'label' : wilaya.nom})
    })
  }
}
