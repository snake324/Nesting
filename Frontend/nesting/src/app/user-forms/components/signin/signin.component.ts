import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  formlogin!: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null;
  showAlert: boolean = false; 
  alertMessage: string = '';
  alertType: string = '';

  constructor(
    private usersService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.formlogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    this.errorMessage = null;

    if (this.formlogin.invalid) {
      return;
    }

    const username = this.formlogin.value.username;
    const password = this.formlogin.value.password;

    const authHeader = 'Basic ' + btoa(username + ':' + password);
    const headers = new HttpHeaders({ Authorization: authHeader });

    this.usersService.loginUser(username, password, headers).subscribe(
      (data) => {

        const jsessionId = data['jsessionid'];
        if (jsessionId) {
          localStorage.setItem('JSESSIONID', jsessionId);
        } else {
          console.error(
            'JSESSIONID no encontrado en la respuesta del servidor.'
          );
        }

        this.getUserIdByEmail(username).subscribe((userId) => {
          localStorage.setItem('userId', userId.toString());
          this.router.navigate(['/user-forms/profile', userId]);
        });
      },
      (error) => {
        console.error('Login error:', error);
        if (error.status === 401) {

          this.alertMessage = 'Credenciales incorrectas. Por favor, verifica tus datos.';
          this.alertType = 'danger';
          this.formlogin.reset();
          this.errorMessage = 'Credenciales incorrectas. Por favor, verifica tus datos.';

        } else {
          this.errorMessage =
            'Hubo un error en el inicio de sesión. Por favor, intenta de nuevo más tarde.';
        }
      }
    );
  }

  getUserIdByEmail(mail: string) {
    return this.usersService.getUserIdByEmail(mail);
  }

}