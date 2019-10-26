import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MainCourseComponent } from './main-course.component';
import { MainCourse } from '../../model/mainCourse/main-course';
import { Dish } from '../../model/dish';

describe('MainCourseComponent', () => {
  let component,
      fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redner stock data', () => {
    const nameEl = fixture.debugElement.query(By.css('.title'));
    expect(nameEl.nativeElement.textContent).toEqual('Schabowy z ziemniakami');
    const idEl = fixture.debugElement.query(By.css('.id'));
    expect(idEl.nativeElement.textContent).toEqual('ID: 1');
    const priceEl = fixture.debugElement.query(By.css(".price"));
    expect(priceEl.nativeElement.textContent).toEqual("Cena 40 zł");
    
  });

  it('should trigger event emitter on rozwiń', () => {
    const element = new MainCourse(20, "name", 30, 'Skladniki', 'alergeny');
    const buttonEl = fixture.debugElement.query(By.css('.button'));
    expect(element.$hide).toBeFalsy();
    buttonEl.triggerEventHandler('click', element.$hideFunc());
    expect(element.$hide).toBeTruthy();
  })
});
 