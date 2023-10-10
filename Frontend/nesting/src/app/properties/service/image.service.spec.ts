import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;
  let httpTestingController: HttpTestingController;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [ImageService],
    });

    service = TestBed.inject(ImageService);
    httpTestingController = TestBed.inject(HttpTestingController);  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should upload images', () => {
    const mockImages: File[] = [/* ... create mock File objects ... */];

    service.uploadImages(mockImages).subscribe(response => {
      
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/images/addimg`);
    expect(req.request.method).toBe('POST');
    

    
    req.flush({/* ... mock response data ... */});

    httpTestingController.verify();  
  });

  
});
