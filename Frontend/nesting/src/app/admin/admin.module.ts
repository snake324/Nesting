import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AdminComponent } from './views/admin/admin.component';


@NgModule({
  declarations: [
    UserTableComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
