import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Agrega esta importación
import { UserService } from 'src/app/user-forms/service/user.service';
import { LogoutService } from '../service/logout.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [UserService, LogoutService, Router],
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout service and navigate to /properties/home', () => {
    spyOn(component['logoutService'], 'logout');
    spyOn(component['router'], 'navigate');

    component.logout();

    expect(component['logoutService'].logout).toHaveBeenCalledOnceWith();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/properties/home']);
  });

  it('should navigate to login when not logged in', () => {
    spyOn(component['userService'], 'isLogged').and.returnValue(false);
    spyOn(component['router'], 'navigate');

    component.navigateToProfileOrLogin();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/user-forms/login']);
  });

  it('should navigate to /properties/sale_rentform when logged in', () => {
    spyOn(component['userService'], 'isLogged').and.returnValue(true);
    spyOn(component['router'], 'navigate');

    component.redirectToSaleRentform();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/properties/sale_rentform']);
  });

  it('should navigate to login when logged in', () => {
    spyOn(component['userService'], 'isLogged').and.returnValue(false);
    spyOn(component['router'], 'navigate');

    component.redirectToSaleRentform();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/user-forms/login']);
  });
});
