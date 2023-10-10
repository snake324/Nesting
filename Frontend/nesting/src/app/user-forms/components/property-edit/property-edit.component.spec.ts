import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { PropertyEditComponent } from './property-edit.component';
import { PropertiesPublishedService } from '../../service/properties-published.service';

describe('PropertyEditComponent', () => {
  let component: PropertyEditComponent;
  let fixture: ComponentFixture<PropertyEditComponent>;

  // Modificamos el mock de ActivatedRoute para proporcionar valores específicos
  const activatedRouteMock = {
    snapshot: {
      paramMap: convertToParamMap({ id: '1' }),  // Proporciona los parámetros necesarios
      queryParamMap: convertToParamMap({}),
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyEditComponent],
      imports: [HttpClientTestingModule],
      providers: [
        PropertiesPublishedService,
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    });
    fixture = TestBed.createComponent(PropertyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
