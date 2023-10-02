import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifybtnComponent } from './modifybtn.component';

describe('ModifybtnComponent', () => {
  let component: ModifybtnComponent;
  let fixture: ComponentFixture<ModifybtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifybtnComponent]
    });
    fixture = TestBed.createComponent(ModifybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
