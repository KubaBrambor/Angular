import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsChairComponent } from './products-chair.component';

describe('ProductsChairComponent', () => {
  let component: ProductsChairComponent;
  let fixture: ComponentFixture<ProductsChairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsChairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
