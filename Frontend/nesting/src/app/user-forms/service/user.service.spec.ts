import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login a user', () => {
    const mockUser = { mail: 'test@example.com', password: 'password' };
    const mockHeaders = new HttpHeaders({ 'Authorization': 'Bearer mockToken' });

    service.loginUser(mockUser.mail, mockUser.password, mockHeaders).subscribe(response => {
     
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers).toEqual(mockHeaders);

    req.flush({/* ... mock response data ... */});
    httpTestingController.verify();
  });

  
});
