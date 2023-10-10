import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PropertiesPublishedService } from '../../service/properties-published.service';

describe('PropertiesPublishedService', () => {
  let service: PropertiesPublishedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [PropertiesPublishedService],
    });

    service = TestBed.inject(PropertiesPublishedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
