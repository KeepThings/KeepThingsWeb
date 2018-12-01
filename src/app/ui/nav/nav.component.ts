import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthenticationService} from '../../authentication.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UserSettingsComponent} from '../user-settings/user-settings.component';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User;
  sub: Subscription;
    LogoImageUrl = '/assets/images/Logo_KeepThings.svg';


  constructor(private userService: UserService, private auth: AuthenticationService,
              private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {

        this.sub = Observable.interval(1000)
            .subscribe((val) => {
              if (!this.user) {
                this.getUserName();
              } else {
                  if (this.userService.needUpdate()) {
                  this.getUserName();
                  }
              }

             });



  }

    changeCursor(value: boolean) {
        if (value) {
            document.body.style.cursor = 'pointer';
        } else if (!value) {
            document.body.style.cursor = 'default';
        }
    }

    getUserName() {
       this.userService.getUserById(localStorage.getItem('userID')).subscribe((data: User) => this.user = data);
    }

    userSettings() {
      this.dialog.open(UserSettingsComponent);

    }

    logout() {
        this.auth.logout().subscribe(data => {
            if (data.success) {
                this.snackBar.open('Logout successful!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
                this.router.navigate(['login']);
                this.user = null;

            } else {
                this.snackBar.open('Logout error!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            }

        });
    }

}
