import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPublishedListComponent } from './properties-published-list.component';

describe('PropertiesPublishedListComponent', () => {
  let component: PropertiesPublishedListComponent;
  let fixture: ComponentFixture<PropertiesPublishedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesPublishedListComponent]
    });
    fixture = TestBed.createComponent(PropertiesPublishedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
