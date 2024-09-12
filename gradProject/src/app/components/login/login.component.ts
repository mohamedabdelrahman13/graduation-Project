import { Component, OnInit , ViewChild , ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrl } from '../../environments/api-url';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { login } from '../../models/login.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  errorMessage!: string;
  isLoggedIN: boolean = false;

  constructor( private fb: FormBuilder,
    private http: HttpClient,
    private router: Router ,
    private log:LoginService,
    private toaster:ToastrService){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = new FormData();
      formData.append('Email', this.loginForm.get('Email')?.value);
      formData.append('Password', this.loginForm.get('Password')?.value);
      this.http.post(`${ApiUrl.ApiUrl}/api/Client/LogIn`, formData)
        .subscribe(
          (response: any) => {
            if (response && response.token) {
              // this.toaster.success('تم التسجيل بنجاح')
              alert('logged in Successfully');
              this.log.login(response.token , response.displayName);
              this.router.navigate(['/services']);  
            } else {
              this.errorMessage = 'Login failed. Please try again.';
            }
          },
          error => {
            console.error('Login error:', error);
            this.errorMessage = 'Login failed. Please try again.';
          }
        );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }


    
  }
  
  
  
}
  
  
  
  
  
  
  
  
  