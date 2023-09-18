import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './global/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'properties', pathMatch: 'full' },
  {
    path: 'properties',
    loadChildren: () =>
      import('./properties/properties.module').then((m) => m.PropertiesModule),
  },
  {
    path: 'user-forms',
    loadChildren: () =>
      import('./user-forms/user-forms.module').then((m) => m.UserFormsModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
