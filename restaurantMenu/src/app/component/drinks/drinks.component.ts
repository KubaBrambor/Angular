import { Component, OnInit } from '@angular/core';
import { Drink } from '../../model/drink/drink';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  public drinksMenu:Drink[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks():void{
    this.drinksMenu = this.service.getDrink();
  }
}
