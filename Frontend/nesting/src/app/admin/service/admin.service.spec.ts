import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService]
    });

    service = TestBed.inject(AdminService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
   
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle user status', () => {
    const userId = 1;
    const newStatus = true;

    service.toggleUserStatus(userId, newStatus).subscribe(response => {
  
      expect(response).toBeDefined();
    });

 
    const req = httpTestingController.expectOne(`${service.apiUrl}/users/updateStatus/${userId}?newStatus=${newStatus}`);
    expect(req.request.method).toEqual('PUT');

   
    req.flush(null);
  });
});
