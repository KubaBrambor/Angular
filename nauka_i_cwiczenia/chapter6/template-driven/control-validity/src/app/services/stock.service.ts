import { Injectable } from '@angular/core';
import { Stock } from '../model/stock'

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

  getStocks() : Stock[] {
    return this.stocks;
  }

  createStock(stock: Stock){
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if(foundStock){
      return false;
    }
    this.stocks.push(stock);
    return true;
  }

  toggleFavorite(stock: Stock){
    let foundStock = this.stocks.find(earch=>earch.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
  }

}
