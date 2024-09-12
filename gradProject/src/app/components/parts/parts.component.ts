import { Component, OnInit } from '@angular/core';
import { parts } from '../../models/parts.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { spareParts } from '../../models/spareParts.model';
import { PartsService } from '../../services/parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent{
  constructor(private router:Router , private log:LoginService , private parts:PartsService){}
  // partsList:spareParts[]=[]
  
  partsList:parts[]=[
    {name:'مفك' , imageUrl:'assets/screwdriver.jpg'},
    {name:'صنبور' , imageUrl:'assets/water tab.jpg'},
    {name:'مفك 2' , imageUrl:'assets/screwdriver2.jpg'},
    {name:'مشترك' , imageUrl:'assets/electric switch.jpg'},
    {name:'زرادية' , imageUrl:'assets/nipper.jpg'},
    {name:'لمبة' , imageUrl:'assets/lamp.jpg'},
    {name:'كابل كهربائي' , imageUrl:'assets/electric cable.jpg'},
    {name:'منشار' , imageUrl:'assets/chainsaw.jpg'},
    {name:'فارة' , imageUrl:'assets/mouse.jpg'},
    {name:'نقاشة' , imageUrl:'assets/paint.jpg'}
  ]
 


  

    goToPayment(){
      if(this.log.hasToken())
      this.router.navigateByUrl('/order')
      else{
        alert('you must login first')
        this.router.navigateByUrl('/login')
      }
    }   
}

