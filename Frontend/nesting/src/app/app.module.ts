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
import { SigninComponent } from './user-forms/components/signin/signin.component';
import { SignupComponent } from './user-forms/components/signup/signup.component';
import { LoginComponent } from './user-forms/views/login/login.component';
import { RegisterComponent } from './user-forms/views/register/register.component';
import { AdminComponent } from './admin/views/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    BuyComponent,
    RentComponent,
    HomecardsComponent,
    BuycardsComponent,
    RentcardsComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
