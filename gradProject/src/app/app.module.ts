import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { OffersComponent } from './components/offers/offers.component';
import { OrderComponent } from './components/order/order.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { PartsComponent } from './components/parts/parts.component';
import { PlaceOrdersComponent } from './components/place-orders/place-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './components/testing/testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginService } from './services/login.service';
import { SuccessComponent } from './components/success/success.component';
import { OrdersService } from './services/orders.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent,
    OffersComponent,
    OrderComponent,
    ContactUsComponent,
    AboutComponent,
    PartsComponent,
    PlaceOrdersComponent,
    TestingComponent,
    ProfileComponent,
    SuccessComponent,
    NotificationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:0
    }), 
  ],
  providers: [LoginService , OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
