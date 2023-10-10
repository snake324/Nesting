import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomecardsComponent } from './homecards.component';
import { PropertiesService } from '../../service/properties.service';
import { of } from 'rxjs';
import { Properties } from '../../models/properties.model';
import { PriceFormatPipe } from '../../pipes/price-format.pipe';
import { Router } from '@angular/router';

describe('HomecardsComponent', () => {
  let component: HomecardsComponent;
  let fixture: ComponentFixture<HomecardsComponent>;
  let propertiesService: jasmine.SpyObj<PropertiesService>;
  let router: Router;

  const mockData: Properties[] = [
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
    },
  ];

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PropertiesService', ['getProperties']);

    TestBed.configureTestingModule({
      declarations: [HomecardsComponent, PriceFormatPipe],
      imports: [RouterTestingModule],
      providers: [
        { provide: PropertiesService, useValue: spy },
        { provide: Router, useClass: RouterTestingModule },
      ],
    });

    fixture = TestBed.createComponent(HomecardsComponent);
    component = fixture.componentInstance;
    propertiesService = TestBed.inject(
      PropertiesService
    ) as jasmine.SpyObj<PropertiesService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch property data on init', () => {
    propertiesService.getProperties.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(propertiesService.getProperties).toHaveBeenCalled();
    expect(component.propertyData).toEqual(mockData);
  });

  it('should apply filters and show image', () => {
    component.selectedType = 'House';
    component.selectedCity = 'Sample City';

    component.applyFiltersAndShowImage();

    expect(component.showImgHomeDiv).toBeFalse();
  });

  it('should fetch property data on init', fakeAsync(() => {
    propertiesService.getProperties.and.returnValue(of(mockData));

    component.ngOnInit();
    tick();

    expect(propertiesService.getProperties).toHaveBeenCalled();
    expect(component.propertyData).toEqual(mockData);
  }));

  it('should get unique and sorted postal codes for a city', () => {
    component.propertyData = mockData;

    const uniquePostalCodes = component.getPostalCodesForCity('Sample City');

    expect(uniquePostalCodes).toEqual(['12345']);
  });

  it('should show image', () => {
    component.filteredPropertyData = [{ ...mockData[0] }];

    component.showImage();

    expect(component.showImgHomeDiv).toBeTrue();
  });

  it('should get max safe integer', () => {
    const maxSafeInteger = component.getMaxSafeInteger();

    expect(maxSafeInteger).toEqual(Number.MAX_SAFE_INTEGER);
  });

  it('should get price range', () => {
    const priceRange = component.getPriceRange(1, 5, 1);

    expect(priceRange).toEqual([1, 2, 3, 4, 5]);
  });

  it('should apply filters and hide image box', () => {
    component.selectedType = 'House';
    component.selectedCity = 'Sample City';
    component.showImgHomeDiv = true;

    component.applyFiltersAndShowImage();

    expect(component.showImgHomeDiv).toBeFalse();
  });
});
