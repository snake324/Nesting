import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRentformComponent } from './sale-rentform.component';

describe('SaleRentformComponent', () => {
  let component: SaleRentformComponent;
  let fixture: ComponentFixture<SaleRentformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleRentformComponent]
    });
    fixture = TestBed.createComponent(SaleRentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
