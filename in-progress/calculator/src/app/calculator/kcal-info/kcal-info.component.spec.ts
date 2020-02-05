import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcalInfoComponent } from './kcal-info.component';

describe('KcalInfoComponent', () => {
  let component: KcalInfoComponent;
  let fixture: ComponentFixture<KcalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
