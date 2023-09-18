import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyFormComponent } from './views/property-form/property-form.component';
import { PrevisualizationComponent } from './views/previsualization/previsualization.component';
import { FilterboxComponent } from './components/filterbox/filterbox.component';
import { BuycardsComponent } from './components/buycards/buycards.component';
import { HomecardsComponent } from './components/homecards/homecards.component';
import { RentcardsComponent } from './components/rentcards/rentcards.component';
import { BuyComponent } from './views/buy/buy.component';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { RentComponent } from './views/rent/rent.component';
import { ModalcontactComponent } from './components/modalcontact/modalcontact.component';
import { ContactBtnComponent } from './components/contactbtn/contactbtn.component';
import { ImghomeComponent } from './components/imghome/imghome.component';
import { SaleRentformComponent } from './views/sale-rentform/sale-rentform.component';
import { SaleRentComponent } from './components/sale-rent/sale-rent.component';


@NgModule({
  declarations: [
    PropertyFormComponent,
    PrevisualizationComponent,
    BuyComponent,
    DetailsComponent,
    HomeComponent,
    RentComponent,
    FilterboxComponent,
    BuycardsComponent,
    HomecardsComponent,
    RentcardsComponent,
    ModalcontactComponent,
    ContactBtnComponent,
    ImghomeComponent,
    SaleRentformComponent,
    SaleRentComponent,

  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
