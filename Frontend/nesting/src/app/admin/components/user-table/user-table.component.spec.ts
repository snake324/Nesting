import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';
import { UserService } from 'src/app/user-forms/service/user.service';
import { AdminService } from 'src/app/admin/service/admin.service';
import { of } from 'rxjs';
import { User } from 'src/app/user-forms/models/user.model';
import { Card } from 'src/app/user-forms/models/card.model';
import { FormsModule } from '@angular/forms';
import { fakeAsync, tick } from '@angular/core/testing';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let adminService: jasmine.SpyObj<AdminService>;
  const mockCard: Card = {
    id: 1,
    owner: 'John Doe',
    number: '1234 5678 9012 3456',
    expiremonth: '12',
    expireyear: '2023',
  };
  
  const mockUserProfile = {
    id: 1,
    name: 'John',
    lastname: 'Doe',
    address: '123 Main St',
    card: mockCard,
    propertiesPublished: [],
  };

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
    const adminServiceSpy = jasmine.createSpyObj('AdminService', ['toggleUserStatus']);
    
    TestBed.configureTestingModule({
      declarations: [UserTableComponent],
      imports: [FormsModule],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: AdminService, useValue: adminServiceSpy },
      ],
    });
  
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    adminService = TestBed.inject(AdminService) as jasmine.SpyObj<AdminService>;
  
    adminService.toggleUserStatus.and.returnValue(of(null)); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users and set filteredUsers on initialization', () => {
    const mockUsers: User[] = [
      { iduser: 1, mail: 'user1@example.com', password: 'password', status: true, userProfile: mockUserProfile  },
    ];

    userService.getUsers.and.returnValue(of(mockUsers));

    fixture.detectChanges();

    expect(component.users).toEqual(mockUsers);
    expect(component.filteredUsers).toEqual(mockUsers);
  });

  it('should filter users based on searchTerm', () => {
    const mockUsers: User[] = [
      { iduser: 1, mail: 'user1@example.com', password: 'password', status: true, userProfile: mockUserProfile  },
      { iduser: 2, mail: 'user2@example.com', password: 'password', status: true, userProfile: mockUserProfile  },
    ];

    userService.getUsers.and.returnValue(of(mockUsers));

    fixture.detectChanges();

    component.searchTerm = 'user1';

    component.searchClients();

    expect(component.filteredUsers).toEqual([mockUsers[0]]);
  });
}); 
