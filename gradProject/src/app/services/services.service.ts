import { Injectable } from '@angular/core';
import { services } from '../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private servicesList:services[]=[]
  
  constructor() {
    this.servicesList=[
      {id:1 , name:'نجار' , imageUrl:'assets/carpenter.jpg'}, 
      {id:2 , name:'ميكانيكي' , imageUrl:'assets/mechanical.jpg'}, 
      {id:3 , name:'سباك' , imageUrl:'assets/blumper.jpg'}, 
      {id:4 , name:'حفار' , imageUrl:'assets/digging.jpg'}, 
      {id:5 , name:'كهربائي' , imageUrl:'assets/electrician.jpg'}, 
      {id:6 , name:'عامل بناء' , imageUrl:'assets/building.jpg'}, 
      {id:7 , name:'نقاش' , imageUrl:'assets/paint.jpg'}, 
      {id:8 , name:'معدات حاسوب' , imageUrl:'assets/computer equippment.jpg'}, 
      {id:9 , name:'مصور' , imageUrl:'assets/photography-logo-vector.jpg'}
    ]  
   }

  getAllServices() :services[]
  {
    return this.servicesList
  }

  getServiceByID(serID:number): services | null
  {
   let foundSer= this.servicesList.find(ser=>ser.id = serID)
   return foundSer ? foundSer : null
  }

}
