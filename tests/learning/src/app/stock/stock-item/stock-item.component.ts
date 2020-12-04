import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public name: string
  public code: string
  public prize: number
  public previousPrize: number
  public positiveChange: boolean
  public toggleFavourite: boolean

  constructor() { }

  ngOnInit(): void {
    this.name = "Company One";
    this.code = "CMO";
    this.prize = 20;
    this.previousPrize = 15;
    this.positiveChange = this.prize >= this.previousPrize;
    this.toggleFavourite = false;
  }

  addToFavourite() {
    console.log("Added to favourite stocks!")
    this.toggleFavourite = !this.toggleFavourite;
  }

}
