import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formregister!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.formregister = this.formBuilder.group({
      mail: ['', [ Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  registerUser() {
    if (this.formregister.valid) {
      const mail = this.formregister.get('mail')?.value;
      const password = this.formregister.get('password')?.value;

      this.userService.registerUser(mail, password)
        .subscribe(
          (response) => {
            console.log('Usuario registrado con éxito', response);
          },
          (error) => {
            console.error('Error al registrar usuario', error);
          }
        );
    }
  }
}
