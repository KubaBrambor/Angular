import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from 'app/services/stock.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
    this.stocks$.subscribe(stocks => {console.log(stocks);
    console.log('showing!')});
  }
  
  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stockService.toggleFavorite(stock);
  }

}
