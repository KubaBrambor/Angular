import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MainCourse } from '../model/mainCourse/main-course';
import { mainMenu } from '../data/mainMenu';

import { Drink } from '../model/drink/drink';
import { drinkMenu } from '../data/drinkMenu';

import { Desser } from '../model/desser/desser';
import { desserMenu } from '../data/desserMenu';

import { Purchaser } from '../model/order/order';
import { orders } from '../data/orders';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getMainCourse():MainCourse[] {
    return mainMenu;
  }

  getDrink():Drink[] {
    return drinkMenu;
  }

  getDesser():Desser[] {
    return desserMenu;
  }

  setOrder(value):void  {
    orders.push(value);
  }
}
