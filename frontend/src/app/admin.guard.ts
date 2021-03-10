
import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAuth: boolean = false;
  constructor(private userService: UserService , private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.userService.isAuthValid().subscribe(data=> {
        this.isAuth = data;
      })
    if(!this.isAuth){
      this.router.navigate(['/login']);
    }
    return this.isAuth;
  }
  
}
