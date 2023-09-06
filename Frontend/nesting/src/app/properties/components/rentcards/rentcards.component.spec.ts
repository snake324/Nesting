import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcardsComponent } from './rentcards.component';

describe('RentcardsComponent', () => {
  let component: RentcardsComponent;
  let fixture: ComponentFixture<RentcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentcardsComponent]
    });
    fixture = TestBed.createComponent(RentcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
