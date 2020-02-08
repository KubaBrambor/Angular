import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { Observable } from 'rxjs/Observable';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';
import { of as ObservableOf } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable()
export class StockService {

  private stocks: Stock[];
  constructor(private http: HttpClient) { 
  }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock')
  }

  getStocksResponse(): Observable<HttpResponse<Stock[]>> {
    return this.http.get<Stock[]>('api/stock', {
      observe: 'response'
    })
  }

  getStocksEvent(): Observable<HttpEvent<any>> {
    return this.http.get('api/stock', {
      observe: 'events'
    })
  }

  getStocksString(): Observable<string> {
    return this.http.get('api/stock', {
      responseType: 'text'
    })
  }

  getStocksBlob(): Observable<Blob> {
    return this.http.get('api/stock', {
      responseType: 'blob'
    })
  }
  
  createStock(stock: Stock): Observable<any>{
    return this.http.post('/api/stock', stock);
  }

  toggleFavorite(stock: Stock): Observable<Stock>{
    return this.http.patch<Stock>('/api/stock/' + stock.code, {favorite: !stock.favorite});
  }

  makeFailingCall() {
    return this.http.get('/api/fail');
  }

}
