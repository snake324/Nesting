import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { UserService } from '../../service/user.service';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let formBuilder: FormBuilder;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['loginUser', 'getUserIdByEmail']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: FormBuilder, useClass: FormBuilder },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    formBuilder = TestBed.inject(FormBuilder);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    component.ngOnInit();
    expect(component.formlogin).toBeDefined();
    expect(component.formlogin.get('username')).toBeDefined();
    expect(component.formlogin.get('password')).toBeDefined();
  });

});
