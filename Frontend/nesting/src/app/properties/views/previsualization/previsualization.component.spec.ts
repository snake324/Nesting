import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisualizationComponent } from './previsualization.component';

describe('PrevisualizationComponent', () => {
  let component: PrevisualizationComponent;
  let fixture: ComponentFixture<PrevisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevisualizationComponent]
    });
    fixture = TestBed.createComponent(PrevisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
