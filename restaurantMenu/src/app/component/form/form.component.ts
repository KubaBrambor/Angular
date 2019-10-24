import { Component, OnInit } from '@angular/core';
import { MainCourse } from '../../model/mainCourse/main-course';


@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public newDish: MainCourse;
  constructor() { 
    this.newDish = new MainCourse(32, "Pierogi ruskie", 12, "Dużo glutenu", "Nie uczulają");
  }

}
