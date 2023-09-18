import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalcardsComponent } from './horizontalcards.component';

describe('HorizontalcardsComponent', () => {
  let component: HorizontalcardsComponent;
  let fixture: ComponentFixture<HorizontalcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalcardsComponent]
    });
    fixture = TestBed.createComponent(HorizontalcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
