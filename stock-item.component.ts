import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
    public name : string | undefined;
    public code : string | undefined;
    public price : number | undefined;
    public previousPrice : number | undefined;
    public positiveChange : boolean | undefined;
    public favorite:  boolean | undefined;

  constructor() {  }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange=this.price>=this.previousPrice;
    this.favorite = false;
  }
  toggleFavorite() {
    console.log('We are toggling the favorite state for this stock');
    this.favorite = !this.favorite;
  }}
