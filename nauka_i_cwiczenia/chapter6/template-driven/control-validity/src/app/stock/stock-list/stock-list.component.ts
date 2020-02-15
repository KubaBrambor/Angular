import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from 'app/services/stock.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/services/auth.service';

import { from } from 'rxjs/observable/from';
import { share } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { debounceTime, switchMap, distinctUntilChanged, startWith } from 'rxjs/operators';
import { start } from 'repl';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();

  constructor(private stockService: StockService,
              private authService: AuthService) { }

  ngOnInit() {

    this.stocks$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.stockService.getStocks(query)),
      share()
    );
    this.stocks$.subscribe(stocks => {console.log(stocks);
    console.log('showing!')});

    this.stockService.getStocksResponse()
      .subscribe((response) => {
        console.log('OBSERVE "response" RESPONSE is ', response)
      });
    this.stockService.getStocksEvent()
      .subscribe((response) => {
        console.log('OBSERVE "events" RESPONSE is ', response)
      })
    this.stockService.getStocksString()
      .subscribe((response) => {
        console.log('Response Type "text" RESPONSE is ', response)
      })
    this.stockService.getStocksBlob()
      .subscribe((response) => {
        console.log('Response Type "blob" RESPONSE is ', response)
      })
  }

  search(){
    this.searchTerms.next(this.searchString);
  }

  setAuthToken() {
    console.log(this.authService.authToken)
    this.authService.authToken = 'TESTING';
    console.log(this.authService.authToken)
  }

  resetAuthToken() {
    this.authService.authToken = null;
    console.log('RESET')
  }

  makeFailingCall() {
    this.stockService.makeFailingCall().subscribe((res) => console.log('Sucessfully made failing call', res),
                                                  (err) => console.log('Error making failing call', err));
  }
  
}
