import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiUrl } from '../../environments/api-url';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  // httpOption
  registerForm!: FormGroup;

   constructor(private http:HttpClient , private fb: FormBuilder , private router:Router){
    // this.httpOption = {
    //   headers: new HttpHeaders({
    //     'Content-Type' : 'application/json'
    //   })
    // }
   }
   ngOnInit() {
    this.registerForm = this.fb.group({
      FName: ['', Validators.required],
      LName: ['', Validators.required],
      Phone: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('FName', this.registerForm.get('FName')?.value);
      formData.append('LName', this.registerForm.get('LName')?.value);
      formData.append('Phone', this.registerForm.get('Phone')?.value);
      formData.append('Email', this.registerForm.get('Email')?.value);
      formData.append('Password', this.registerForm.get('Password')?.value);
      formData.append('ConfirmPassword', this.registerForm.get('ConfirmPassword')?.value);
      const headers = new HttpHeaders({
        'Accept': 'application/json'  // Optional, specify what type of response the client expects
      });

      this.http.post(`${ApiUrl.ApiUrl}/api/Client/Register`, formData , {headers})
        .subscribe(
          (response) => {
            alert('Registration successful!');
            this.router.navigateByUrl('/login')
            // console.log('Registration successful', response);
          },
          // error => {
          //   console.error('Registration failed', error);
          //   alert('Registration failed. Please try again.');
          // }
        );
    } else {
      alert('Please fill in all required fields.');
    }
  }
  
   
   
}

// onSubmit(form: NgForm) {
//   if (form.valid) {
//     const { FName  , LName , Phone ,Email, Password , ConfirmPassword } = form.value;
//     const data = { FName  , LName , Phone ,Email, Password , ConfirmPassword};
//     console.log('Sending data:', data );  // Log the data being sent
//     console.log(data.ConfirmPassword);  // Log the data being sent
//     this.registerUser(data);
//   }
// }

// registerUser(data: {Email: string ; FName:string ; LName:number ; Phone: string; Password: string ; ConfirmPassword:string }) {
//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json'
//   });
//   const apiUrl = `${ApiUrl.ApiUrl}/api/Client/Register`; // Replace with your API URL
//   this.http.post(apiUrl, data , {headers}).subscribe(
//     (response) => {
//       console.log('Success:', response);
//       alert('Registration successful!');
//     },
//     (error) => {
//       // console.error('Error:', error);
//       alert('Registration failed!');
//     }
//   );
// }