import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { environment } from 'src/environments/environment.development';
import { Profile } from '../models/profile.model';
import { Card } from '../models/card.model';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService],
    });

    service = TestBed.inject(ProfileService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get profiles', () => {
    const mockProfiles: Profile[] = [/* ... Mocked profile data ... */];

    service.getProfiles().subscribe((profiles) => {
      expect(profiles).toEqual(mockProfiles);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/profile`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProfiles);
  });

  it('should get a profile by id', () => {
    const profileId = '1';
    const mockCard: Card = {
      id: 1,
      owner: 'John Doe',
      number: '1234 5678 9012 3456',
      expiremonth: '12',
      expireyear: '2023',
    };
    const mockProfile: Profile = {id: 1,
      name: 'John',
      lastname: 'Doe',
      address: '123 Main St',
      card: mockCard,
      propertiesPublished: [],};

    

    service.getProfile(profileId).subscribe((profile) => {
      expect(profile).toEqual(mockProfile);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/profile/${profileId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProfile);
  });

  it('should save a profile', () => {
    const mockCard: Card = {
      id: 1,
      owner: 'John Doe',
      number: '1234 5678 9012 3456',
      expiremonth: '12',
      expireyear: '2023',
    };
  
    const mockProfile: Profile = {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      address: '123 Main St',
      card: mockCard,  
      propertiesPublished: [],
    };
  
    service.saveProfile(mockProfile).subscribe((savedProfile) => {
      expect(savedProfile).toEqual(mockProfile);
    });
  
    const req = httpTestingController.expectOne(`${environment.apiUrl}/profile/update/${mockProfile.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockProfile);
  });

  it('should delete a profile', () => {
    const profileId = '1';
  
    
    const mockCard: Card = {
      id: 1,
      owner: 'John Doe',
      number: '1234 5678 9012 3456',
      expiremonth: '12',
      expireyear: '2023',
    };
  
    const mockDeletedProfile: Profile = {
      id: 0,
      name: '',
      lastname: '',
      address: '',
      card: mockCard,
      propertiesPublished: []
    };
  
    service.deleteProfile(profileId).subscribe((deletedProfile) => {
      expect(deletedProfile).toEqual(mockDeletedProfile);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/profile/delete/${profileId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockDeletedProfile);
  });
});
