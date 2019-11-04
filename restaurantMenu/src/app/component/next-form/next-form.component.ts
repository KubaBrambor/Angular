import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { emailValidator } from '../../validators/emailValidation';

@Component({
  selector: 'next-form',
  templateUrl: './next-form.component.html',
  styleUrls: ['./next-form.component.scss']
})
export class NextFormComponent {

  public mainForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }
  ngOnInit(){
    this.name;
    console.log(this.name);
  }
  buildForm(){
    this.mainForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      surname: [null, [Validators.required, Validators.minLength(2), emailValidator("test")]]
    })
  }

  submitOrder(){
    if(this.mainForm.valid){
      console.log(this.mainForm.value)
    } else if(this.mainForm.value < 2) {
      console.error("proszę uzupełnić pole!")
    } else {
      console.error("mhm")
    }
    console.log(this.name);
  }

  get name(){
    return this.mainForm.get('name');
  }
  

}
