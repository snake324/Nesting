import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-forms/service/user.service';
import { LogoutService } from '../service/logout.service';
import { CookieService } from 'ngx-cookie-service';

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
    private cookieService: CookieService // Agrega el servicio de cookies
  ) { }

  ngOnInit() {

    // Verifica si la cookie JSESSIONID ya existe al cargar el componente
    if (this.cookieService.check('JSESSIONID')) {
      // La cookie existe, redirige al perfil
      this.router.navigate(['/user-forms/profile']);
    }

  }


  isProfilePage(): boolean {
    return this.router.url.startsWith('/user-forms/profile/');
  }

  logout() {
    this.logoutService.logout().subscribe(
      () => {
        this.router.navigate(['/properties/home']);
      },
      (error) => {
        console.error('Error durante el logout:', error);
      }
    );
  }

  navigateToProfileOrLogin() {
    const user = this.userService.isUserAuthenticated();
    if (user) {
      this.router.navigate(['/user-forms/profile', user.iduser]);
    } else {
      this.router.navigate(['/user-forms/login']);
    }
  }

  redirectToSaleRentform() {
    this.router.navigate(['/properties/sale_rentform']);
  }

}
