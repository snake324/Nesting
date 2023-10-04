import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycardsComponent } from './buycards.component';

describe('BuycardsComponent', () => {
  let component: BuycardsComponent;
  let fixture: ComponentFixture<BuycardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuycardsComponent]
    });
    fixture = TestBed.createComponent(BuycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
