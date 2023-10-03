import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { BuyComponent } from './views/buy/buy.component';
import { RentComponent } from './views/rent/rent.component';
import { PropertyFormComponent } from './views/property-form/property-form.component';
import { PrevisualizationComponent } from './views/previsualization/previsualization.component';
import { SaleRentformComponent } from './views/sale-rentform/sale-rentform.component';
import { ReserveComponent } from './components/reserve/reserve.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'reserve/:id', component: ReserveComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'rent', component: RentComponent },
  { path: 'property-form', component: PropertyFormComponent },
  { path: 'previsualization', component: PrevisualizationComponent },
  { path: 'sale_rentform', component: SaleRentformComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
