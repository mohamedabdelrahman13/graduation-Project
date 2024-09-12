import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';  

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private log: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    if (this.log.hasToken()) {
      return true;
    } else {
      alert('you must login first')
      this.router.navigate(['/login']);  // Redirect to login if not authenticated
      return false;
    }
  }
}