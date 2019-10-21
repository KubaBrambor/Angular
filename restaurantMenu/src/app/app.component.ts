import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

import { MainCourse } from './model/mainCourse/main-course';
import { Drink } from './model/drink/drink';
import { Desser } from './model/desser/desser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurantMenu';
  public mainCourse:MainCourse[];
  public drink:Drink[];

  constructor(private service: ServiceService){}

  ngOnInit(){
    this.getMainCourse();
    this.getDrink();
    console.log(this.mainCourse[0].$id, this.mainCourse[0].$name, this.drink[1].$name)
  }

  getMainCourse():void {
    this.mainCourse = this.service.getMainCourse()
  }
  
  getDrink():void {
    this.drink = this.service.getDrink()
  }
}
