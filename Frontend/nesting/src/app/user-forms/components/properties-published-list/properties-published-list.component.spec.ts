import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PropertiesPublishedListComponent } from './properties-published-list.component';
import { ProfileService } from '../../service/profile.service';
import { PropertiesPublishedService } from '../../service/properties-published.service';
import { Profile } from '../../models/profile.model';  
import { Card } from '../../models/card.model';

describe('PropertiesPublishedListComponent', () => {
  let component: PropertiesPublishedListComponent;
  let fixture: ComponentFixture<PropertiesPublishedListComponent>;
  let profileService: jasmine.SpyObj<ProfileService>;
  let propertiesPublishedService: jasmine.SpyObj<PropertiesPublishedService>;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    const profileServiceSpy = jasmine.createSpyObj('ProfileService', ['getProfile']);
    const propertiesPublishedServiceSpy = jasmine.createSpyObj('PropertiesPublishedService', ['updatePropertyStatus']);

    TestBed.configureTestingModule({
      declarations: [PropertiesPublishedListComponent],
      providers: [
        { provide: ProfileService, useValue: profileServiceSpy },
        { provide: PropertiesPublishedService, useValue: propertiesPublishedServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (param: string) => '123', // Assuming a profile ID of '123'
            }),
          },
        },
      ],
    });

    fixture = TestBed.createComponent(PropertiesPublishedListComponent);
    component = fixture.componentInstance;
    profileService = TestBed.inject(ProfileService) as jasmine.SpyObj<ProfileService>;
    propertiesPublishedService = TestBed.inject(PropertiesPublishedService) as jasmine.SpyObj<PropertiesPublishedService>;
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get profile data on initialization', () => {
    const mockProfile: Profile = {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      address: '123 Main St',
      card: {
        id: 1,
        owner: 'John Doe',
        number: '1234 5678 9012 3456',
        expiremonth: '12',
        expireyear: '25',
      },
      propertiesPublished: [
        {
          id: 456,
          description: 'This is a sample property.',
          title: 'dasdas',
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
        },
      ],
    };
  
    profileService.getProfile.and.returnValue(of(mockProfile));
  
    component.ngOnInit();
  
    expect(profileService.getProfile).toHaveBeenCalledWith('123');
    expect(component.profile).toEqual(mockProfile);
  });

  it('should update property status', () => {
    const mockProfile: Profile = {
      id: 123,
      propertiesPublished: [
        {
          id: 456,
          title: 'Sample Property',
          description: 'This is a sample property.',
          city: 'Madrid',
          postalCode: '28001',
          rooms: 3,
          baths: 2,
          size: 150,
          price: 200000,
          type: 'Venta',
          status: false,
          houseType: 'Casa',
          publishDate: '2023-01-01',
          modificationDate: '2023-01-02',
          images: [],
        },
      ],
      name: '',
      lastname: '',
      address: '',
      card: {
        id: 1,
        owner: 'John Doe',
        number: '1234 5678 9012 3456',
        expiremonth: '12',
        expireyear: '25',
      },
    };
  
    component.profile = mockProfile;
  
    propertiesPublishedService.updatePropertyStatus.and.returnValue(of());
  
    component.updateStatus(0, false);
  
    expect(propertiesPublishedService.updatePropertyStatus).toHaveBeenCalledWith('456', false);
    expect(component.profile?.propertiesPublished[0].status).toBeFalse();
  });
});
