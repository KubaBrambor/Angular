import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { Observable } from 'rxjs/Observable';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';
import { of as ObservableOf } from 'rxjs/observable/of';

@Injectable()
export class StockService {

  private stocks: Stock[];
  constructor() { 
    this.stocks = [
      new Stock('Pepsi', 'PEP', 90, 85, 'NASDAQ'),
      new Stock('Coca-Cola', 'COL', 82, 90, 'NASDAQ'),
      new Stock('Frugo', 'FRU', 50, 15, 'NSE')
    ]
  }

  getStocks() : Observable<Stock[]> {
    return ObservableOf(this.stocks);
  }

  createStock(stock: Stock): Observable<any>{
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if(foundStock){
      return ObservableThrow({msg: 'Stock with code ' + stock.code + ' already exists.'});
    }
    this.stocks.push(stock);
    return ObservableOf({msg: 'Stock with code ' + stock.code + ' successfully created'});
  }

  toggleFavorite(stock: Stock): Observable<Stock>{
    let foundStock = this.stocks.find(earch=>earch.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
    return ObservableOf(foundStock);
  }

}
