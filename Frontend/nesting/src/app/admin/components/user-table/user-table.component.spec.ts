import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';
import { UserService } from 'src/app/user-forms/service/user.service';
import { AdminService } from 'src/app/admin/service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { User } from 'src/app/user-forms/models/user.model';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let adminService: jasmine.SpyObj<AdminService>;
  let router: jasmine.SpyObj<Router>;

  const mockUsers: User[] = [
    {
      iduser: 1,
      mail: 'user1@example.com',
      password: 'password',
      status: true,
      userProfile: {
        userProfile: null,
        id: 1,
        name: 'John',
        lastname: 'Doe',
        address: '123 Main St',
        card: {
          id: 1,
          owner: 'John Doe',
          surname: 'Doe',
          number: '1234 5678 9012 3456',
          expiremonth: '12',
          expireyear: '2023',
        },
        propertiesPublished: [],
      },
    },
    {
      iduser: 2,
      mail: 'user2@example.com',
      password: 'password',
      status: true,
      userProfile: {
        userProfile: null,
        id: 2,
        name: 'Jane',
        lastname: 'Doe',
        address: '456 Oak St',
        card: {
          id: 2,
          owner: 'Jane Doe',
          surname: 'Doe',
          number: '9876 5432 1098 7654',
          expiremonth: '06',
          expireyear: '2022',
        },
        propertiesPublished: [],
      },
    },
  ];

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
    const adminServiceSpy = jasmine.createSpyObj('AdminService', ['toggleUserStatus']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [UserTableComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: AdminService, useValue: adminServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: {} },
      ],
    });

    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    adminService = TestBed.inject(AdminService) as jasmine.SpyObj<AdminService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    userService.getUsers.and.returnValue(of(mockUsers));
    adminService.toggleUserStatus.and.returnValue(of(null));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should hide alert', () => {
    component.hideAlert();
    expect(component.alertMessage).toBe('');
    expect(component.alertType).toBe('');
  });

  it('should show and hide alert after a delay', fakeAsync(() => {
    component.showAlert('Test Message', 'success');
    expect(component.alertMessage).toBe('Test Message');
    expect(component.alertType).toBe('success');

    tick(3000); 
    expect(component.alertMessage).toBe('');
    expect(component.alertType).toBe('');
  }));

  it('should navigate back', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['../']);
  });
});
