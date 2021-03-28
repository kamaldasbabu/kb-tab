
import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

 

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAuth: boolean = false;
  constructor(private userService: UserService , private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
        if(!this.userService.isLogin()){
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
    }
    return true;
  }
  
}
