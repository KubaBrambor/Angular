import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { orders } from 'src/app/data/orders';

@Component({
  selector: 'form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {
  public formControl: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    surname: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    adress: new FormControl(null, [Validators.required, Validators.minLength(1)])
  });
  constructor() { }

  onSubmit(){
    console.log(this.formControl.value, this.formControl.status)
    orders.push(this.formControl.value)
    console.log(orders)
  }
}
