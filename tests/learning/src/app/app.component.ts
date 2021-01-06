import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
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
    console.log('App component - ng onit')
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

  changeStockObject(){
    this.stockObj = [
      new Stock('Orlen', 'ORL', 100, 20)
    ]
    // this.stockObj.push(new Stock('Orlen', 'ORL', 80, 40))
    // console.log(this.stockObj)
  }
  changeStockPrice(){
    for(let stock of this.stockObj){
      stock.prize += 10;
    }
  }

  ngAfterViewInit():void {
    console.log('App component - after view init')
  }

  ngAfterViewChecked():void {
    console.log('App component - after view checked')
  }

  ngAfterContentInit():void {
    console.log('App component - after content init')
  }

  ngAfterContentChecked():void {
    console.log('App component - after content checked')
  }

  ngDoCheck():void {
    console.log('App componnet - do check')
  }

  ngOnDestroy():void {
    console.log('App component - on destroy')
  }

  ngOnChanges(changes: SimpleChanges):void{
    console.log('App component - on changes - ', changes)
  }
}
