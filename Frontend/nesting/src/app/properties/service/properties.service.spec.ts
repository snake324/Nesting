import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PropertiesService } from './properties.service';
import { Properties } from '../models/properties.model';

describe('PropertiesService', () => {
  let service: PropertiesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PropertiesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get properties', () => {
    const mockProperties: Properties[] = [
      {
        id: 1,
        title: 'Sample Property',
        description: 'This is a sample property.',
        city: 'Madrid',
        postalCode: '28001',
        rooms: 3,
        baths: 2,
        size: 150,
        price: 200000,
        type: 'Venta',
        status: true,
        houseType: 'Casa',
        publishDate: '2023-01-01',
        modificationDate: '2023-01-02',
        images: [],
        address: '123 Sample St',
        ownermail: 'owner@example.com',
      },
    ];

    service.getProperties().subscribe((data) => {
      expect(data).toEqual(mockProperties);
    });

    const req = httpTestingController.expectOne(
      `${service['apiUrl']}/properties`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockProperties);
  });

  it('should get a single property by ID', () => {
    const propertyId = 1;
    const mockProperty: Properties = {
      id: propertyId,
      title: 'Sample Property',
      description: 'This is a sample property.',
      city: 'Madrid',
      postalCode: '28001',
      rooms: 3,
      baths: 2,
      size: 150,
      price: 200000,
      type: 'Venta',
      status: true,
      houseType: 'Casa',
      publishDate: '2023-01-01',
      modificationDate: '2023-01-02',
      images: [],
      address: '123 Sample St',
      ownermail: 'owner@example.com',
    };

    service.getProperty(propertyId).subscribe((data) => {
      expect(data).toEqual(mockProperty);
    });

    const req = httpTestingController.expectOne(
      `${service['apiUrl']}/properties/${propertyId}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockProperty);
  });

  it('should save a new property', () => {
    const userId = 'user123';
    const newProperty: Properties = {
      id: 0,
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

    service.saveProperty(newProperty, userId).subscribe((data) => {
      expect(data).toEqual(newProperty);
    });

    const req = httpTestingController.expectOne(
      `${service['apiUrl']}/properties/create/${userId}`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(newProperty);
  });

  it('should delete a property by ID', () => {
    const propertyId = 1;

    service.deleteProperty(propertyId).subscribe();

    const req = httpTestingController.expectOne(
      `${service['apiUrl']}/properties/delete/${propertyId}`
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });
});
