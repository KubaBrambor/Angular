import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessersComponent } from './dessers.component';

describe('DessersComponent', () => {
  let component: DessersComponent;
  let fixture: ComponentFixture<DessersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
