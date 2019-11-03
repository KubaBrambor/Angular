import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

import { orders } from '../../data/orders';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public puchaser:object;
  public hide:boolean = false;
  public disable:boolean = true;
  public orderData:boolean = false;

  constructor(private Service: ServiceService) { 
  
  }

  setNewOrder(clientForm){
    if(clientForm.valid && clientForm.touched){
      this.puchaser = clientForm.value.orderForm;
      this.setOrderData();
      console.log(this.puchaser);
      orders.push(this.puchaser);
      console.log(orders)
      
    } else {
      console.error("Nie wypełniono formularza!");
    }
    
    
  }
  
  showFunc(){
    this.hide = !this.hide;
    this.disable = true;
  };

  hideFunc(){
    this.hide = false;
    this.disable = !this.disable;
  }

  setCheckButton(){
    this.disable = !this.disable;
  }

  setOrderData(){
    this.orderData = !this.orderData;
  }
}
