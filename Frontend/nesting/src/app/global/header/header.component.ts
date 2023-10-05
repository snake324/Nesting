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


  isProfilePage(): boolean {
    return this.router.url.startsWith('/user-forms/profile/');
  }

  logout(){
    this.logoutService.logout()
    this.router.navigate(['/properties/home'])
  }

  navigateToProfileOrLogin() {
    const jsessionId = localStorage.getItem('JSESSIONID');
    if (jsessionId) {
      // Verificar si también existe la ID del usuario
      const userId = localStorage.getItem('userId');
      if (userId) {
        // Redirigir al perfil del usuario con la ID específica
        this.router.navigate(['/user-forms/profile', userId]);
      }
    }else{
      this.router.navigate(['/user-forms/login'])
    }
  }

  redirectToSaleRentform() {
    this.router.navigate(['/properties/sale_rentform']);
  }

}
