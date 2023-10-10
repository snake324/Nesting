import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-forms/service/user.service';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private logoutService: LogoutService,
  ) { }

  ngOnInit() {



  }

  isLogged() {
    return this.userService.isLogged();
  }

  isProfilePage(): boolean {
    return this.router.url.startsWith('/user-forms/profile/');
  }

  isAdminPage(): boolean {
    return this.router.url.startsWith('/admin/admin');
  }

  logout() {
    this.logoutService.logout()
    this.router.navigate(['/properties/home'])
  }

  navigateToProfileOrLogin() {
    if (this.userService.isLogged()) {
      if (this.userService.getUserRoles()?.includes('ROLE_ADMIN')) {
        this.router.navigate(['/admin/admin'])
      }else{
        if (this.userService.navigateId() != null) {
          this.router.navigate(['/user-forms/profile', this.userService.navigateId()])
        }
      }
    }
    else {
      this.router.navigate(['/user-forms/login'])
    }
  }

  redirectToSaleRentform() {
    if (this.userService.isLogged()) {
      this.router.navigate(['/properties/sale_rentform']);
    }else{
      this.router.navigate(['/user-forms/login'])
    }

  }

}
