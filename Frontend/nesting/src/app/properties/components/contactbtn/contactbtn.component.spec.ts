import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbtnComponent } from './contactbtn.component';

describe('ContactbtnComponent', () => {
  let component: ContactbtnComponent;
  let fixture: ComponentFixture<ContactbtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactbtnComponent]
    });
    fixture = TestBed.createComponent(ContactbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
