import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  @Input() stock: Stock;
  @Output() toggleFavorite = new EventEmitter<Stock>();

  constructor() {

   }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }
}
