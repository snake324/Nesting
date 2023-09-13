import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcontactComponent } from './modalcontact.component';

describe('ModalcontactComponent', () => {
  let component: ModalcontactComponent;
  let fixture: ComponentFixture<ModalcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalcontactComponent]
    });
    fixture = TestBed.createComponent(ModalcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
