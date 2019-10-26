import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

import { Purchaser } from '../../model/order/order';
import { orders } from '../../data/orders';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public name:string;
  public surname:string;
  public adress:string;
  public shipping:string;
  public hide:boolean = false;

  constructor(private Service: ServiceService) { 
    // this.newOrder = new Purchaser("", "", "", "");
    // this.setNewOrder();
    console.log(orders);
  }

  setNewOrder(event){
    orders.push(new Purchaser(this.name, this.surname, this.adress, this.shipping))
    console.log(orders)
  }
  
  showFunc(){
    this.hide = !this.hide;
  };

  hideFunc(){
    this.hide = false;
  }
}
