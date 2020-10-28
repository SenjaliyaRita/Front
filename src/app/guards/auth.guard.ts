import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router:Router,
    private userService:UserService,
  ){ }

  canActivate(){
    if (this.userService.checkUser()!=null) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }
  
}
