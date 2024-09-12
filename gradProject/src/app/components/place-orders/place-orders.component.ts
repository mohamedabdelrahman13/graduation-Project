import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { services } from '../../models/services.model';
import { ServicesService } from '../../services/services.service';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-place-orders',
  templateUrl: './place-orders.component.html',
  styleUrl: './place-orders.component.css'
})
export class PlaceOrdersComponent implements OnInit{
  service : any | services ={} as services;
  currSerID:number = 0
 constructor(private route:ActivatedRoute , private serv:ServicesService){
 }
 
 ngOnInit(): void {
   this.currSerID=Number(this.route.snapshot.paramMap.get('Sid'))
   this.service = this.serv.getServiceByID(this.currSerID)
 }
 
 
//  ngOnChanges(): void {
//   // this.currSerID=Number(this.route.snapshot.paramMap.get('Sid'))
//   this.service = this.serv.getServiceByID(this.currSerID)
//   console.log(this.currSerID)
// }
}
