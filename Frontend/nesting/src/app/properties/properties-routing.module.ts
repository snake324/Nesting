import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { BuyComponent } from './views/buy/buy.component';
import { RentComponent } from './views/rent/rent.component';
import { PropertyFormComponent } from './views/property-form/property-form.component';
import { PrevisualizationComponent } from './views/previsualization/previsualization.component';
import { AdminComponent } from './views/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'buy', component: BuyComponent},
  { path: 'rent', component: RentComponent},
  { path: 'property-form', component: PropertyFormComponent},
  { path: 'previsualization', component: PrevisualizationComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
