import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomiarComponent } from './pomiar.component';

describe('PomiarComponent', () => {
  let component: PomiarComponent;
  let fixture: ComponentFixture<PomiarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomiarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
