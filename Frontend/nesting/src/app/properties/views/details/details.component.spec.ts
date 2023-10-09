import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DetailsComponent } from './details.component';
import { PropertiesService } from '../../service/properties.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let propertiesServiceSpy: jasmine.SpyObj<PropertiesService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PropertiesService', ['getProperty']);

    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
        { provide: PropertiesService, useValue: spy },
      ],
    });

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    propertiesServiceSpy = TestBed.inject(
      PropertiesService
    ) as jasmine.SpyObj<PropertiesService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch property details on ngOnInit', () => {
    const mockProperty = {
      id: 1,
      title: 'New Property',
      description: 'This is a new property.',
      city: 'Barcelona',
      postalCode: '08001',
      rooms: 4,
      baths: 3,
      size: 180,
      price: 250000,
      type: 'Alquiler',
      status: true,
      houseType: 'Piso',
      publishDate: '2023-02-01',
      modificationDate: '2023-02-02',
      images: [],
      address: '456 New St',
      ownermail: 'owner2@example.com',
    };

    propertiesServiceSpy.getProperty.and.returnValue(of(mockProperty));

    const activatedRoute = TestBed.inject(
      ActivatedRoute
    ) as jasmine.SpyObj<ActivatedRoute>;

    activatedRoute.params = of({ id: 1 });

    component.ngOnInit();

    expect(propertiesServiceSpy.getProperty).toHaveBeenCalledWith(1);
    expect(component.property).toEqual(mockProperty);
  });
});
