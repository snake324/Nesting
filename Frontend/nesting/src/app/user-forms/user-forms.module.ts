import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormsRoutingModule } from './user-forms-routing.module';
import { ProfileComponent } from './views/profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule
  ]
})
export class UserFormsModule { }
