import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HorizontalcardsComponent } from './components/horizontalcards/horizontalcards.component';
import { PreviewbtnComponent } from './components/previewbtn/previewbtn.component';
import { SaleRentformComponent } from './views/sale-rentform/sale-rentform.component';
import { SaleRentComponent } from './components/sale-rent/sale-rent.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReservebtnComponent } from './components/reservebtn/reservebtn.component';
import { ReservemodalComponent } from './components/reservemodal/reservemodal.component';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { ModifybtnComponent } from './components/modifybtn/modifybtn.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryuploadComponent } from './components/galleryupload/galleryupload.component';
import { PublishBtnComponent } from './components/publish-btn/publish-btn.component';




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
    HorizontalcardsComponent,
    PreviewbtnComponent,
    SaleRentformComponent,
    SaleRentComponent,
    FileUploadComponent,
    ReservebtnComponent,
    ReservemodalComponent,
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
  ]
})
export class PropertiesModule { }
