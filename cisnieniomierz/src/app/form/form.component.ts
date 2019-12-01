import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pomiar } from '../pomiar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private pomiarObj: Pomiar;
  public pomiar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }
  
  get cisnienie() { return this.pomiar.get('cisnienie') }
  get pora() { return this.pomiar.get('pora') }
  get data() { return this.pomiar.get('data') }

  createForm(){
    this.pomiar = this.fb.group({
      cisnienie:[null, [Validators.required, Validators.min(1)]],
      pora:[null, Validators.required],
      data:[null, Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.pomiarObj = Object.assign({}, this.pomiar.value);
    console.log(this.pomiarObj);
  }

}
