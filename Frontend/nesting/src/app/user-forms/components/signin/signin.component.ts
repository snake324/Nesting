import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.userService.login(this.email, this.password)
        .subscribe(
          (user) => {
            console.log('Inicio de sesión exitoso:', user);
            this.router.navigate(['/properties/home']);
          },
          (error) => {
            console.error('Error al iniciar sesión:', error);
          }
        );
    }
  }
}
