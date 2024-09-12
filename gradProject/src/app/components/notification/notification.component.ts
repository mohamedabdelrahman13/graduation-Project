import { Component, OnInit } from '@angular/core';
import { notify } from '../../models/notify.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
 notificationList:notify[]=[
   {id:1 ,  message: 'تم إضافة طلب جديد', time: 'منذ 5 دقائق' },
  { id:2 ,message: 'تم تحديث المعلومات الشخصية', time: 'اليوم 12:30 م' },
  { id:3, message: 'لديك رسالة جديدة', time: 'أمس 8:00 م' }
 ]

 delete(index:number){
 
        this.notificationList.splice(index , 1)
     
      
    };
 }


