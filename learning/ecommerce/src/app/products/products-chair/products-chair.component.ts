import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-chair',
  templateUrl: './products-chair.component.html',
  styleUrls: ['./products-chair.component.scss']
})
export class ProductsChairComponent implements OnInit {

  public name: string;
  public price: number;
  public prodImage: string;
  public buy: boolean;

  constructor() { }

  ngOnInit() {
    this.name = "Krzesło Super Siedzisko";
    this.price = 199.99;
    this.prodImage = "../../../favicon.ico";
    this.buy = false;
  }

    buyProduct(event): boolean{
      console.log("product bought!", event);
      return this.buy = !this.buy;
    }

}
