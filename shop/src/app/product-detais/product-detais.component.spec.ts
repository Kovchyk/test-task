import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaisComponent } from './product-detais.component';

describe('ProductDetaisComponent', () => {
  let component: ProductDetaisComponent;
  let fixture: ComponentFixture<ProductDetaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
