import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public pomiar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  createForm(){
    this.pomiar = this.fb.group({
      cisnienie:[null, Validators.required],
      pora:[null],
      data:[null, Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.pomiar.value);
  }

}
