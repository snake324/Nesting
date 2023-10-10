import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisualizationComponent } from './previsualization.component';
import { ModifybtnComponent } from '../../components/modifybtn/modifybtn.component';
import { PublishBtnComponent } from '../../components/publish-btn/publish-btn.component';

describe('PrevisualizationComponent', () => {
  let component: PrevisualizationComponent;
  let fixture: ComponentFixture<PrevisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevisualizationComponent, ModifybtnComponent, PublishBtnComponent ]
    });
    fixture = TestBed.createComponent(PrevisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
