import { Component, OnInit } from '@angular/core';
import { Stock, Obligacje } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public obligacje: Obligacje;
  public stocks: any[];
  public stockStyles: {};
  public stockClasses: {};
  public largeChange: boolean;
  constructor() { }

  ngOnInit(): void {
    this.stocks = [
      new Stock('CD Projekt Red', 'CDP', 40, 35),
      new Stock('Techland', 'TCH', 25, 10),
      new Stock('KGHM', 'KGH', 15, 30)
    ];
    
    // this.stockStyles = {
    //   "color": this.stock.isPositiveChange() ? "green" : "red",
    //   "font-size": this.largeChange ? "25px" : "5px"
    // };
    
  }

  addToFavourite(event, i) {
    console.log("Stock added to favourite!", this.stocks[i])
    this.stocks[i].favourite = !this.stocks[i].favourite;
  }
  stockClassesFunc(i){
    this.stockClasses = {
      "positive": this.stocks[i].isPositiveChange(),
      "negative": !this.stocks[i].isPositiveChange(),
      "large-change": this.largeChangeFunc(i),
      "small-change": !this.largeChangeFunc(i)
    }
    return this.stockClasses;
  }
  largeChangeFunc(i){
    let diff = (this.stocks[i].prize/this.stocks[i].previousPrize) - 1;
    this.largeChange = Math.abs(diff) > 0.4;
    return this.largeChange;
  }
}
