import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { login } from '../models/login.model';
import { ApiUrl } from '../environments/api-url';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private username = new BehaviorSubject<any>(this.getUsername());

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get currentUsername(): Observable<string> {
    return this.username.asObservable();
  }

   getUsername(){
    return localStorage.getItem('username');
  }

   hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login(token:string ,  username: string) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
    this.loggedIn.next(true);
    this.username.next(username);
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    this.loggedIn.next(false);
    this.username.next(''); 
  }
 
}











// constructor(private http:HttpClient) {
// }

// loginData(data:login) : Observable<object>{
//  const headers = new HttpHeaders({
//    'Content-Type': 'multipart/form-data'
//  });
// return this.http.post<object>(`${ApiUrl.ApiUrl}/api/Client/LogIn` , data , {headers});
// }