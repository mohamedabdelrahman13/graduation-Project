import { Component } from '@angular/core';
import { offers } from '../../models/offers.model';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  constructor(private router:Router , private log:LoginService){

  }
     offerList:offers[]=[
      {
        title: ' صيانة الاجهزة الالكترونية',
        description: 'خدمة تصميم واجهات مستخدم مبتكرة ومتجاوبة مع جميع الأجهزة.',
        price: 200,
        imageUrl: 'assets/offer1.jpg', 
      },
      {
        title: '  صيانة الاجهزة الكهربائية',
        description: 'خدمة تطوير تطبيقات الهاتف الذكي لأنظمة iOS و Android باستخدام أحدث التقنيات.',
        price: 300,
        imageUrl: 'assets/offer2.jpg', 
      },
      {
        title: ' صيانة التكييف',
        description: '  يوجد صيانة شامة للتكييف ويوجد خصم عليه.',
        price: 150 ,
        imageUrl: 'assets/offer3.jpg', 
      },
     
     ]

     goToOrder(){
      if(this.log.hasToken())
      this.router.navigateByUrl('/order')
  else{
    alert('you must login first')
    this.router.navigateByUrl('/login')
    }
}

}