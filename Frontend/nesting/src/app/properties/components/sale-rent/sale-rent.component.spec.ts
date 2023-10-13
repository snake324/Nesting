import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SaleRentComponent } from './sale-rent.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewbtnComponent } from '../previewbtn/previewbtn.component';

describe('SaleRentComponent', () => {
  let component: SaleRentComponent;
  let fixture: ComponentFixture<SaleRentComponent>;
  let propertiesService: jasmine.SpyObj<PropertiesService>;
  let router: Router;

  const spy = jasmine.createSpyObj('PropertiesService', ['saveProperty']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SaleRentComponent,
        FileUploadComponent,
        PreviewbtnComponent,
      ],
      imports: [HttpClientModule],
      providers: [
        FormBuilder,
        { provide: PropertiesService, useValue: spy },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
    });

    fixture = TestBed.createComponent(SaleRentComponent);
    component = fixture.componentInstance;
    propertiesService = TestBed.inject(
      PropertiesService
    ) as jasmine.SpyObj<PropertiesService>;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
