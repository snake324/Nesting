import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formregister!: FormGroup;
  errorMessage: string | null = null;
  showAlert: boolean = false; 
  alertMessage: string = '';
  alertType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formregister = this.formBuilder.group({
      mail: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  async registerUser() {
    if (this.formregister.valid) {
      const mail = this.formregister.get('mail')?.value;
      const password = this.formregister.get('password')?.value;
  
      this.userService.getUsers().pipe(
        map(users => users.some(user => user.mail === mail))
      ).subscribe((userExists) => {
        if (userExists) {
          this.alertMessage = 'El correo electrónico ya existe.';
          this.alertType = 'danger';
          this.formregister.reset();
        } else {
          this.userService.registerUser(mail, password).subscribe(
            (response) => {
              console.log('Usuario registrado con éxito', response);
              const authHeader = 'Basic ' + btoa(mail + ':' + password);
              const headers = new HttpHeaders({ 'Authorization': authHeader });
  
              this.userService.loginUser(mail, password, headers).subscribe(
                (data) => {
                  console.log(data);
  
                  const jsessionId = data['jsessionid'];
                  if (jsessionId) {
                    localStorage.setItem('JSESSIONID', jsessionId);
                  } else {
                    console.error('JSESSIONID no encontrado en la respuesta del servidor.');
                  }
  
                  this.getUserIdByEmail(mail).subscribe((userId) => {
                    localStorage.setItem('userId', userId.toString());
                    this.alertMessage = 'Usuario registrado con éxito.';
                    this.alertType = 'success';

                    setTimeout(() => {
                      this.router.navigate(['/user-forms/profile', userId]);
                    }, 3000);
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
            },
            (error) => {
              console.error('Error al registrar usuario', error);
            }
          );
        }
      });
    }
  }
  

  getUserIdByEmail(mail: string) {
    return this.userService.getUserIdByEmail(mail);
  }
}