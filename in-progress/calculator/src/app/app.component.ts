import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  public productsList:Array<Product>;
  private counter:any;
  
  ngOnInit(){
    this.productsList = [new Product("Ziemniaki 100gram", 300),
                         new Product("Kasza 100gram", 365),
                         new Product("Ryż 100gram", 380),
                         new Product("Płatki owsiane 100gram", 400),
                         new Product("Ryż z kurczakiem", 780),
                         new Product("Pierś z indyka (pieczona)", 550),
                         new Product("Odżywka białkowa 32gramy", 180),
                         new Product("Twarożek chudy 250gram", 250),
                         new Product("Banan", 180),
                         new Product("Garść orzechów nerkowca", 250)];
    this.counter = 0;
  }

  showValue(productsArray :Array<Product>){
    console.log(`${productsArray[this.counter].calories} ${productsArray[this.counter].name}`);
    this.productsList.push(productsArray[this.counter]);
    console.log(this.productsList[this.counter]);
    this.counter++
    console.log(`counter wynosi ${this.counter}`);
  }
}
