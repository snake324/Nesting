import { TestBed } from '@angular/core/testing';

import { PropertiesPublishedService } from './properties-published.service';

describe('PropertiesPublishedService', () => {
  let service: PropertiesPublishedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesPublishedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
