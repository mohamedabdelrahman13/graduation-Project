import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit , OnInit  {
  isLoggedIN:boolean = false;
  username: string = '';
  constructor(private router:Router , private log:LoginService){}
  
  goToProfile(){
    this.router.navigateByUrl('/profile')
  }
  ngOnInit(): void {
    this.log.isLoggedIn.subscribe((loggedIN:boolean)=>{
      this.isLoggedIN = loggedIN;
    })
    this.log.currentUsername.subscribe((username: string) => {
      this.username = username;
    });
  }

 
   
  

  OnLogout(): void{
    this.log.logout();
    // localStorage.removeItem('authToken');
    alert('you have Logged out')
    this.router.navigateByUrl('/login');
  }

  ngAfterViewInit(): void {
   
  }


}




// logIn(){
 
// }

// logOut(){
//   localStorage.removeItem('authToken');
//   alert('you have Logged out')
//   this.router.navigateByUrl('/login');
//   this.isLoggedOut = true;
// }