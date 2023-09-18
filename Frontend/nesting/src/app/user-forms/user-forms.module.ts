import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormsRoutingModule } from './user-forms-routing.module';
import { ProfileComponent } from './views/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    FormsModule
  ]
})
export class UserFormsModule { }
