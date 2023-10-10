import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PropertiesPublishedService } from './properties-published.service';

describe('PropertiesPublishedService', () => {
  let service: PropertiesPublishedService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PropertiesPublishedService],
    });

    service = TestBed.inject(PropertiesPublishedService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve properties', () => {
    const mockProperties = [
      { id: 1, name: 'Property 1' },
      { id: 2, name: 'Property 2' },
    ];

    service.getProperties().subscribe((properties) => {
      expect(properties).toEqual(mockProperties);
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/properties`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProperties);
  });

  it('should handle errors when retrieving properties', () => {
    const errorMessage = 'Server error';

    service.getProperties().subscribe(
      () => fail('should have failed with the server error'),
      (error) => {
        expect(error).toEqual(errorMessage);
      }
    );

    const req = httpTestingController.expectOne(`${service.apiUrl}/properties`);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });
});
