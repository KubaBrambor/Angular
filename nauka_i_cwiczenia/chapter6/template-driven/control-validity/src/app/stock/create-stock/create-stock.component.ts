import { Component, OnInit } from '@angular/core';
import { Stock } from 'app/model/stock';
import { StockService } from 'app/services/stock.service';
import { MessageService } from 'app/services/message.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers: [MessageService]
})
export class CreateStockComponent {

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
<<<<<<< HEAD
      let created = this.stockService.createStock(this.stock);
      if(created){
        this.messageService.message = 
            'Sucessfully created stock with code ' + this.stock.code;
        this.stock = new Stock('', '', 0, 0, 'NASDAQ');
      } else {
        this.messageService.message = 
            'Stock with code ' + this.stock.code + ' already exists.'
      }
=======
      this.stockService.createStock(this.stock).subscribe((result: any) => {
        this.message = result.msg;
        this.stock = new Stock('', '', 0, 0, 'NASDAQ');
      }, (err) => {
        this.message = err.msg;
      });
>>>>>>> 9715230560fe7901c524ccd12c4e4d6d387bf6dc
    } else {
      console.error('Stock form is invalid state');
    }
  }
}
