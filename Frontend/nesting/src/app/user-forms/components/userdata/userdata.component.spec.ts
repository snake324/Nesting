import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataComponent } from './userdata.component';
import { of } from 'rxjs';
import { ProfileService } from '../../service/profile.service';
import { UserService } from '../../service/user.service';
import { Card } from '../../models/card.model';
import { Profile } from '../../models/profile.model';
import { User } from '../../models/user.model';

describe('UserdataComponent', () => {
  let component: UserdataComponent;
  let fixture: ComponentFixture<UserdataComponent>;
  let profileService: jasmine.SpyObj<ProfileService>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const profileServiceSpy = jasmine.createSpyObj('ProfileService', [
      'getProfile',
      'saveProfile',
    ]);
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [UserdataComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => '1' }) } as any,
        },
        { provide: ProfileService, useValue: profileServiceSpy },
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(UserdataComponent);
    component = fixture.componentInstance;
    profileService = TestBed.inject(
      ProfileService
    ) as jasmine.SpyObj<ProfileService>;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should initialize component', () => {
    const profileId = '1';

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
      propertiesPublished: [
        {
          id: 1,
          title: 'Property 1',
          description: 'Description 1',
          city: 'City 1',
          postalCode: '12345',
          rooms: 3,
          baths: 2,
          size: 150,
          price: 200000,
          type: 'Sale',
          status: true,
          houseType: 'Apartment',
          publishDate: '2023-10-05',
          modificationDate: '2023-10-05',
          images: [{ id: 1, img: 'image1.jpg' }],
        },
      ],
    };

    const mockUser: User = {
      iduser: 1,
      mail: 'john.doe@example.com',
      password: 'password',
      status: true,
      userProfile: mockProfile,
    };

    spyOn(TestBed.inject(ActivatedRoute).paramMap, 'pipe').and.returnValue(
      of({ get: () => profileId })
    );

    profileService.getProfile.and.returnValue(of(mockProfile));
    userService.getUser.and.returnValue(of(mockUser));

    component.ngOnInit();

    expect(profileService.getProfile).toHaveBeenCalledWith(profileId);
    expect(userService.getUser).toHaveBeenCalledWith(profileId);
    expect(component.profile).toEqual(mockProfile);
    expect(component.user).toEqual(mockUser);
  });

  it('should save profile successfully', () => {
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

    profileService.getProfile.and.returnValue(of(mockProfile));
    userService.getUser.and.returnValue(
      of({
        iduser: 1,
        mail: 'john.doe@example.com',
        password: 'password',
        status: true,
        userProfile: mockProfile,
      })
    );

    profileService.saveProfile.and.returnValue(
      of({ message: 'Profile saved successfully' } as unknown as Profile)
    );

    component.ngOnInit();
    component.saveProfile();

    expect(profileService.saveProfile).toHaveBeenCalledWith(mockProfile);
  });
});
