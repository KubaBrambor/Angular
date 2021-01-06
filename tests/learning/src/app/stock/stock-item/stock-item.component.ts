import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Stock, Obligacje } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public obligacje: Obligacje;
  @Input() public stocks: Stock[];
  @Output() public toggleFavourite:EventEmitter<number>;
  public stockStyles: {};
  public stockClasses: {};
  public largeChange: boolean;

  constructor() { 
    this.toggleFavourite = new EventEmitter<number>();
  }

  ngOnInit(): void {
    
    // this.stockStyles = {
    //   "color": this.stock.isPositiveChange() ? "green" : "red",
    //   "font-size": this.largeChange ? "25px" : "5px"
    // };
    
  }

  addToFavourite(event, i) {
    console.log("Stock added to favourite!", this.stocks[i])
    this.toggleFavourite.emit(i);
  }
  changeStockPrize(i){
    this.stocks[i].prize += 5;
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
  trackByFunc(index, item){
    return item.name;
  }
}
