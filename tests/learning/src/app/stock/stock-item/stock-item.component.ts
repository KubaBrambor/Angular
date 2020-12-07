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
    this.stock = new Stock('Company One', 'CMO', 20, 19);
    this.obligacje = new Obligacje('CD Projekt Red', 'CDP', 40, 1, 'Polska')
    this.stocks = [this.stock, this.obligacje];
    let diff = (this.stock.prize/this.stock.previousPrize) - 1;
    this.largeChange = Math.abs(diff) > 0.4;
    this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": this.largeChange ? "25px" : "5px"
    };
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": this.largeChange,
      "small-change": !this.largeChange
    }
  }

  addToFavourite(event) {
    console.log("Stock added to favourite!", this.stocks[event.path[1].id])
    this.stocks[event.path[1].id].favourite = !this.stocks[event.path[1].id].favourite;
  }
}
