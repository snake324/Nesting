import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactComponent } from './contact.component';
import { PropertiesService } from '../../service/properties.service';
import { Properties } from '../../models/properties.model';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let propertiesServiceSpy: jasmine.SpyObj<PropertiesService>;
  let httpTestingController: HttpTestingController;

  const propertyDetails: Properties = 
    {
      id: 1,
      title: 'Sample Property',
      description: 'This is a sample property.',
      city: 'Sample City',
      postalCode: '12345',
      rooms: 3,
      baths: 2,
      size: 150,
      price: 200000,
      type: 'House',
      status: true,
      houseType: 'Detached',
      publishDate: '2023-01-01',
      modificationDate: '2023-01-02',
      images: [],
      address: '123 Sample St',
      ownermail: 'owner@example.com',
    };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PropertiesService', ['getProperty']);
  
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: PropertiesService, useValue: spy },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
      ],
    });
  
    propertiesServiceSpy = TestBed.inject(PropertiesService) as jasmine.SpyObj<PropertiesService>;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch property details on init', fakeAsync(() => {
    propertiesServiceSpy.getProperty.and.returnValue(of(propertyDetails));

    component.ngOnInit();
    tick();

    expect(component.property).toEqual(propertyDetails);
  }));
});
