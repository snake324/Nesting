import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { SignupComponent } from './signup.component';
import { UserService } from '../../service/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, tick } from '@angular/core/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    
    const userServiceSpy = jasmine.createSpyObj('UserService', ['registerUser', 'getUsers', 'loginUser', 'getUserIdByEmail']);

    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
      ],
    });

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register user successfully', fakeAsync(() => {
    const mail = 'test@example.com';
    const password = 'password';
  
    component.formregister.setValue({ mail, password });
  
    userService.getUsers.and.returnValue(of([]));
    userService.registerUser.and.returnValue(of({ message: 'User registered successfully' }));
  
    component.registerUser();
  
    expect(userService.getUsers).toHaveBeenCalled();
    expect(userService.registerUser).toHaveBeenCalledWith(mail, password);
    expect(router.navigate).toHaveBeenCalledWith(['/user-forms/login']);
  
   
    tick();
  }));

  it('should handle registration error', () => {
    const mail = 'test@example.com';
    const password = 'password';

    component.formregister.setValue({ mail, password });

    const errorMessage = 'Registration failed';
    userService.getUsers.and.returnValue(of([])); 
    userService.registerUser.and.returnValue(throwError(errorMessage));

    component.registerUser();

    expect(userService.getUsers).toHaveBeenCalled(); 
    expect(userService.registerUser).toHaveBeenCalledWith(mail, password);
    expect(component.errorMessage).toBe(errorMessage);
  });

  it('should not register user with invalid form', () => {
    component.registerUser();

    expect(userService.registerUser).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
