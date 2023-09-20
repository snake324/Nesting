import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewbtnComponent } from './previewbtn.component';

describe('PreviewbtnComponent', () => {
  let component: PreviewbtnComponent;
  let fixture: ComponentFixture<PreviewbtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewbtnComponent]
    });
    fixture = TestBed.createComponent(PreviewbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
