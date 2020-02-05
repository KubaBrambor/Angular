import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { MainCourse } from '../../model/mainCourse/main-course';

@Component({
  selector: 'main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.scss']
})
export class MainCourseComponent implements OnInit {

  public mainCourseMenu:MainCourse[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getMainCourseMenu();
  }
  getMainCourseMenu():void{
    this.mainCourseMenu = this.service.getMainCourse();
  }
}
