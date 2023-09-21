import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservebtnComponent } from './reservebtn.component';

describe('ReservebtnComponent', () => {
  let component: ReservebtnComponent;
  let fixture: ComponentFixture<ReservebtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservebtnComponent]
    });
    fixture = TestBed.createComponent(ReservebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
