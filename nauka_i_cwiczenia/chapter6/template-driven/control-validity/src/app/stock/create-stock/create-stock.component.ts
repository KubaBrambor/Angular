import { Component, OnInit } from '@angular/core';
import { Stock } from 'app/model/stock';
import { StockService } from 'app/services/stock.service';
import { MessageService } from 'app/services/message.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers: [MessageService]
})
export class CreateStockComponent {
  public stocks$: Observable<Stock[]>;
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService,
              public messageService: MessageService) {
    this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
    this.messageService.message = 'CREATE-STOCK COMPONENT LEVEL: Hello MessageService in create-stock component!';
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      this.stockService.createStock(this.stock).subscribe((result: any) => {
        this.messageService.message = result.msg;
        this.stock = new Stock('', '', 0, 0, 'NASDAQ');
      }, (err) => {
        this.messageService.message = err.msg;
      });
      this.stocks$ = this.stockService.getStocks();
      this.stocks$.subscribe(stock => {console.log(stock, stock.length)});
    } else {
      console.error('Stock form is invalid state');
    }
  }
}
