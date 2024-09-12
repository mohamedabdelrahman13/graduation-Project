import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { OffersComponent } from './components/offers/offers.component';
import { OrderComponent } from './components/order/order.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { PartsComponent } from './components/parts/parts.component';
import { ServicesComponent } from './components/services/services.component';
import { PlaceOrdersComponent } from './components/place-orders/place-orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { SuccessComponent } from './components/success/success.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  {path:'' , component:HomeComponent}, //default path
  {path:'place-orders' , component:PlaceOrdersComponent},
  {path:'parts' , component:PartsComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'services' , component:ServicesComponent},
  {path:'services/:Sid' , component:PlaceOrdersComponent},
  {path:'about' , component:AboutComponent},
  {path:'contactUs' , component:ContactUsComponent},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'offers' , component:OffersComponent},
  {path:'order' , component:OrderComponent},
  {path:'success' , component:SuccessComponent},
  {path:'notification' , component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
