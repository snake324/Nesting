import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './properties/views/home/home.component';
import { DetailsComponent } from './properties/views/details/details.component';
import { BuyComponent } from './properties/views/buy/buy.component';
import { RentComponent } from './properties/views/rent/rent.component';
import { HomecardsComponent } from './properties/components/homecards/homecards.component';
import { BuycardsComponent } from './properties/components/buycards/buycards.component';
import { RentcardsComponent } from './properties/components/rentcards/rentcards.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    FormsModule,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
