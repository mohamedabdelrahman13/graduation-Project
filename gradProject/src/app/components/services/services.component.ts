import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { services } from '../../models/services.model';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent{
  servicesList:services[]=[]
  constructor(private router:Router,  private servService:ServicesService , private log:LoginService , private toaster:ToastrService){

    this.servicesList=this.servService.getAllServices();
  }
    delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
  goToPayment(){
    if(this.log.hasToken())
    this.router.navigateByUrl('/order')
    else{
      alert('you must login first')
      // this.toaster.error('يجب تسجيل الدخول اولا')
      this.router.navigateByUrl('/login')
    }
  }

  //  addToOrders(servID:number)
  //  {
  //   this.router.navigate(['/services', servID])
  //   alert('item added to cart!')
  //  }

}
//  servicesList:services[]=[
  //    {id:1 , name:'نجار' , imageUrl:'assets/carpenter.jpg'}, 
  //    {id:2 , name:'ميكانيكي' , imageUrl:'assets/mechanical.jpg'}, 
  //    {id:3 , name:'سباك' , imageUrl:'assets/blumper.jpg'}, 
  //    {id:4 , name:'حفار' , imageUrl:'assets/digging.jpg'}, 
  //    {id:5 , name:'كهربائي' , imageUrl:'assets/electrician.jpg'}, 
  //    {id:6 , name:'عامل بناء' , imageUrl:'assets/building.jpg'}, 
  //    {id:7 , name:'نقاش' , imageUrl:'assets/paint.jpg'}, 
  //    {id:8 , name:'معدات حاسوب' , imageUrl:'assets/computer equippment.jpg'}, 
  //    {id:9 , name:'مصور' , imageUrl:'assets/photography-logo-vector.jpg'}
  //  ]  