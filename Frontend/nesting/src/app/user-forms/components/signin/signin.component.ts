import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  formlogin!: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private usersService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.formlogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    // Verifica si la cookie JSESSIONID ya existe al cargar el componente
    if (this.cookieService.check('JSESSIONID')) {
      // La cookie existe, redirige al perfil
      this.router.navigate(['/user-forms/profile']);
    }
  }

  login() {
    this.errorMessage = null;

    if (this.formlogin.invalid) {
      return;
    }

    const username = this.formlogin.value.username;
    const password = this.formlogin.value.password;

    const authHeader = 'Basic ' + btoa(username + ':' + password);
    const headers = new HttpHeaders({ 'Authorization': authHeader })

    this.usersService.loginUser(username, password, headers).subscribe(
      (data) => {
        console.log(data);
        const jsessionIdValue = this.extractJSessionIDValue(data); // Define jsessionIdValue aquí
        const authHeader = 'Basic ' + btoa(username + ':' + password);
        const headers = new HttpHeaders({
          'Authorization': authHeader,
          'Cookie': 'JSESSIONID=' + jsessionIdValue
        });

        this.getUserIdByEmail(username).subscribe((userId) => {
          console.log(userId);
          this.router.navigate(['/user-forms/profile', userId]);
        });
      },
      (error) => {
        console.error('Login error:', error);
        if (error.status === 401) {
          this.errorMessage = 'Credenciales incorrectas. Por favor, verifica tus datos.';
        } else {
          this.errorMessage = 'Hubo un error en el inicio de sesión. Por favor, intenta de nuevo más tarde.';
        }
      }
    );
  }

  getUserIdByEmail(mail: string) {
    return this.usersService.getUserIdByEmail(mail);
  }

  extractJSessionIDValue(response: any): string | null {
    if (response && response.headers) { // Verificar si 'headers' está definido
      const cookies = response.headers.getAll('Set-Cookie');
      if (cookies && cookies.length > 0) {
        for (const cookie of cookies) {
          if (cookie.startsWith('JSESSIONID=')) {
            const parts = cookie.split(';');
            const jsessionId = parts[0].split('=')[1];
            return jsessionId;
          }
        }
      }
    }
    return null; // Valor de JSESSIONID no encontrado o headers no definidos
  }

}
