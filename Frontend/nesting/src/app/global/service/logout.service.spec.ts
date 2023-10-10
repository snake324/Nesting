import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LogoutService } from './logout.service';

describe('LogoutService', () => {
  let service: LogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LogoutService],
    });
    service = TestBed.inject(LogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove JSESSIONID from localStorage on logout', () => {
    
    localStorage.setItem('JSESSIONID', 'mockSessionId');

    
    service.logout();

    
    expect(localStorage.getItem('JSESSIONID')).toBeNull();
  });
});
