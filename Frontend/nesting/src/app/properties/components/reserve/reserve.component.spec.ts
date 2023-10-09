import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';

import { ReserveComponent } from './reserve.component';

describe('ReserveComponent', () => {
  let component: ReserveComponent;
  let fixture: ComponentFixture<ReserveComponent>;
  let activatedRoute: ActivatedRoute;
  let propertiesService: PropertiesService;
  let router: Router;

  const mockPropertyDetails = {
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

  const spy = jasmine.createSpyObj('PropertiesService', ['getProperty']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        },
        {
          provide: PropertiesService,
          useValue: spy,
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
    });
    fixture = TestBed.createComponent(ReserveComponent);
    component = fixture.componentInstance;

    activatedRoute = TestBed.inject(ActivatedRoute);
    propertiesService = TestBed.inject(
      PropertiesService
    ) as jasmine.SpyObj<PropertiesService>;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch property details on init', () => {
    spy.getProperty.and.returnValue(of(mockPropertyDetails));

    component.ngOnInit();

    expect(spy.getProperty).toHaveBeenCalledWith('1');
    expect(component.property).toEqual(mockPropertyDetails);
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith(['../']);
  });
});
