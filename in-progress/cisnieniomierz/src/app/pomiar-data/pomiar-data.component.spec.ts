import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomiarDataComponent } from './pomiar-data.component';

describe('PomiarDataComponent', () => {
  let component: PomiarDataComponent;
  let fixture: ComponentFixture<PomiarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomiarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomiarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
