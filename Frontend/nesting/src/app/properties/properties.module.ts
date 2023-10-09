import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropertiesRoutingModule } from './properties-routing.module';

import { PrevisualizationComponent } from './views/previsualization/previsualization.component';
import { HomecardsComponent } from './components/homecards/homecards.component';
import { BuyComponent } from './views/buy/buy.component';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';

import { PreviewbtnComponent } from './components/previewbtn/previewbtn.component';
import { SaleRentformComponent } from './views/sale-rentform/sale-rentform.component';
import { SaleRentComponent } from './components/sale-rent/sale-rent.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { ModifybtnComponent } from './components/modifybtn/modifybtn.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ContactComponent } from './components/contact/contact.component';
import { PublishBtnComponent } from './components/publish-btn/publish-btn.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PrevisualizationComponent,
    BuyComponent,
    DetailsComponent,
    HomeComponent,

    HomecardsComponent,

    PreviewbtnComponent,
    SaleRentformComponent,
    SaleRentComponent,
    FileUploadComponent,

    PriceFormatPipe,
    ModifybtnComponent,
    ReserveComponent,
    ContactComponent,
    PublishBtnComponent,
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PropertiesModule {}
