import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservemodalComponent } from './reservemodal.component';

describe('ReservemodalComponent', () => {
  let component: ReservemodalComponent;
  let fixture: ComponentFixture<ReservemodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservemodalComponent]
    });
    fixture = TestBed.createComponent(ReservemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
