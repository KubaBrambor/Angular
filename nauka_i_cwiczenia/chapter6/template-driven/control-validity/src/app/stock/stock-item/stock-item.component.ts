import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../../model/stock';
import { StockService } from 'app/services/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  @Input() public stock: Stock;

  constructor(private stockService: StockService) {

   }

  onToggleFavorite(event) {
    this.stockService.toggleFavorite(this.stock).subscribe((result: any) => {this.stock.favorite = !this.stock.favorite;
    console.log(result.msg)});
  }
}
