import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ApiUrl } from '../../environments/api-url';
import { OrdersService } from '../../services/orders.service';
import { order } from '../../models/order.model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router ,
    private log:LoginService,
    private order:OrdersService){
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      Date: ['', Validators.required],
      Time: ['', Validators.required],
      ClientAddress: ['', Validators.required],
      Phone: ['', Validators.required],
      Problem: ['', Validators.required]
    });
  }
    

  onSubmit() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log('submitted')
    console.log(this.orderForm.valid)
    const formData = new FormData();
    formData.append('Date', this.orderForm.get('Date')?.value);
    formData.append('Time', this.orderForm.get('Time')?.value);
    formData.append('ClientAddress', this.orderForm.get('ClientAddress')?.value);
    formData.append('Phone', this.orderForm.get('Phone')?.value);
    formData.append('Problem', this.orderForm.get('Problem')?.value);
    this.http.post(`${ApiUrl.ApiUrl}/api/Order/MakeOrder`, formData , { headers } )
          .subscribe(
            (response) => {   
                alert('تم اضافة الطلب')
                this.router.navigateByUrl('/success'); 
            },
            error => {
              console.error('Login error:', error);
              this.errorMessage = 'order failed Please try again.';
            }
          );
      } 
  
    
}







