import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddedComponent } from './card-added.component';

describe('CardAddedComponent', () => {
  let component: CardAddedComponent;
  let fixture: ComponentFixture<CardAddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAddedComponent]
    });
    fixture = TestBed.createComponent(CardAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
