import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){

  }

  goToAbout(){
    this.router.navigateByUrl('/about');
  }
  goToServices(){
    this.router.navigateByUrl('/services');

  }
}
