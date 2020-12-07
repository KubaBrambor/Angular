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
  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Company One', 'CMO', 20, 40);
    this.obligacje = new Obligacje('CD Projekt Red', 'CDP', 40, 1, 'Polska')
    this.stocks = [this.stock, this.obligacje];
    let diff = (this.stock.prize/this.stock.previousPrize) - 1;
    let largeChange = Math.abs(diff) > 0.4;
    this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "25px" : "10px"
    };
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    }
  }

  addToFavourite(event) {
    console.log("Stock added to favourite!", this.stocks[event.path[1].id])
    this.stocks[event.path[1].id].favourite = !this.stocks[event.path[1].id].favourite;
  }
}
