import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthenticationService} from '../../authentication.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UserSettingsComponent} from '../user-settings/user-settings.component';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs';
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

  ngOnInit(): void {

      this.getUserName();
  }

    changeCursor(value: boolean) {
        if (value) {
            document.body.style.cursor = 'pointer';
        } else if (!value) {
            document.body.style.cursor = 'default';
        }
    }

    getUserName() {
       this.userService.getUserById(1).subscribe(value => this.user = value);
    }

    userSettings() {
        if (this.auth.isLoggedIn) {
            this.dialog.open(UserSettingsComponent);
        }

    }

    logout() {
        this.auth.logout();
    }

}
