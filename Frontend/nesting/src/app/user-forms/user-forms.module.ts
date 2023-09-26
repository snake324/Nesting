import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormsRoutingModule } from './user-forms-routing.module';
import { ProfileComponent } from './views/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { PropertiesPublishedListComponent } from './components/properties-published-list/properties-published-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    SigninComponent,
    SignupComponent,
    UserdataComponent,
    PropertiesPublishedListComponent
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserFormsModule { }
