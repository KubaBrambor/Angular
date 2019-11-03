import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { orders } from 'src/app/data/orders';

@Component({
  selector: 'form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {
  public formControl: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }

  buildForm(){
    this.formControl = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1)]],
      surname: [null, [Validators.required, Validators.minLength(1)]],
      adress: [null, [Validators.required, Validators.minLength(2)]]
    })
  }

  onSubmit(){
    console.log(this.formControl.value, this.formControl.status)
    orders.push(this.formControl.value)
    console.log(orders)
  }
}
