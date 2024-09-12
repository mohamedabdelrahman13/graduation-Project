import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from '../models/order.model';
import { Observable } from 'rxjs';
import { ApiUrl } from '../environments/api-url';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  
  createOrder(order: order): Observable<string> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${ApiUrl.ApiUrl}/api/Order/MakeOrder`, order, { headers, responseType: 'text' });
  }

}
