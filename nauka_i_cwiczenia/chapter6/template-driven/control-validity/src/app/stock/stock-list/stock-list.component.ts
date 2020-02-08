import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from 'app/services/stock.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;

  constructor(private stockService: StockService,
              private authService: AuthService) { }

  ngOnInit() {
    this.fetchStocks();

    this.stocks$ = this.stockService.getStocks();
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

  fetchStocks() {
    this.stocks$ = this.stockService.getStocks();
  }

  setAuthToken() {
    this.authService.authToken = 'TESTING';
  }

  resetAuthToken() {
    this.authService.authToken = null;
  }

  makeFailingCall() {
    this.stockService.makeFailingCall().subscribe((res) => console.log('Sucessfully made failing call', res),
                                                  (err) => console.log('Error making failing call', err));
  }
  
}
