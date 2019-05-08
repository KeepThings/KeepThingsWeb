import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthenticationService} from '../../authentication.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UserSettingsComponent} from '../user-settings/user-settings.component';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/interval';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MessagesComponent} from '../messages/messages.component';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User;
    LogoImageUrl = '/assets/images/Logo_KeepThings.svg';


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
              }
          });
  }

    getUser() {
       this.userService.getUserById(this.auth.userProfile.sub).subscribe(value => this.user = value);
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
