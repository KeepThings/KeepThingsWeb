import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router, private user: UserService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.auth.isLoggedIn) {
            console.log(this.auth.isLoggedIn + 'is login');
            console.log('User not logged in');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }


  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.isLoggedIn) {
          return true;
      }
      return this.user.isLoggedIn().pipe(map(res => {
          if (res.status) {
              this.auth.setLoggedIn(true);
              return true;
          } else {
              this.router.navigate(['login']);
              return false;
          }
      }));
  } */
}
