import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRentComponent } from './sale-rent.component';

describe('SaleRentComponent', () => {
  let component: SaleRentComponent;
  let fixture: ComponentFixture<SaleRentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleRentComponent]
    });
    fixture = TestBed.createComponent(SaleRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
