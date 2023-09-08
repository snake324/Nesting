import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterboxComponent } from './filterbox.component';

describe('FilterboxComponent', () => {
  let component: FilterboxComponent;
  let fixture: ComponentFixture<FilterboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterboxComponent]
    });
    fixture = TestBed.createComponent(FilterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
