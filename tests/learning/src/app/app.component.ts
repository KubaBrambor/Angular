import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Stock } from '../app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'learning';
  public stockObj: Stock[]

  ngOnInit():void {
    this.stockObj = [
      new Stock('CD Projekt Red', 'CDP', 40, 35),
      new Stock('Techland', 'TCH', 25, 10),
      new Stock('KGHM', 'KGH', 15, 30)
    ];
  }

  onToggleFavourite(i: number){
    console.log(`Add to favourite button was triggered for stock`);
    this.stockObj[i].favourite = !this.stockObj[i].favourite;
    console.dir(this.stockObj[i])
  }

}
