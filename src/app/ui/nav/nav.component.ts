import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthenticationService} from '../../authentication.service';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {UserSettingsComponent} from '../user-settings/user-settings.component';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/interval';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MessagesComponent} from '../messages/messages.component';
import {filter, finalize} from 'rxjs/operators';
import {NewUserComponent} from '../new-user/new-user.component';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User;
    LogoImageUrl = '/assets/images/Logo_KeepThings.svg';

    open = false;
  constructor(private userService: UserService, private auth: AuthenticationService,
              private dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.watchRouter();
  }

  watchRouter() {
          this.router.events.pipe(
              filter(event => event instanceof NavigationEnd)
          ).subscribe(() => {
              if (this.router.url === '/dashboard') {
                  this.getUser();
                  this.startInterval();
              }
          });
  }

    startInterval() {
        setInterval(() => {
            this.getUser();
        }, 1000);
    }

    newUser() {
      this.open = true;
        this.dialog.open(RegisterComponent, { disableClose: true });
    }

    getUser() {
       this.userService.getUserById(this.auth.userProfile.sub).subscribe(res => {
           if(res.status !== 200 && !this.open) {
               this.newUser();
           } else {
               this.user = res.body;
           }
       });
    }

    userSettings() {
        if (this.auth.isLoggedIn) {
            this.dialog.open(UserSettingsComponent);
        }
    }
    messages() {
      if (this.auth.isLoggedIn) {
          this.dialog.open(MessagesComponent);
      }
    }

    logout() {
        this.auth.logout();
        this.user = null;
    }

}
