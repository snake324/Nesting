import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishBtnComponent } from './publish-btn.component';

describe('PublishBtnComponent', () => {
  let component: PublishBtnComponent;
  let fixture: ComponentFixture<PublishBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublishBtnComponent]
    });
    fixture = TestBed.createComponent(PublishBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
