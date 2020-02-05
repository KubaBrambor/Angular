import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomiarListComponent } from './pomiar-list.component';

describe('PomiarListComponent', () => {
  let component: PomiarListComponent;
  let fixture: ComponentFixture<PomiarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomiarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomiarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
