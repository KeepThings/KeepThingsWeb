import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthenticationService} from '../../authentication.service';
import {MatDialog} from '@angular/material';
import {UserSettingsComponent} from '../user-settings/user-settings.component';

interface user{
  user: User;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User;
    userID;
    LogoImageUrl = '/assets/images/Logo_KeepThings.svg';


  constructor(private userService: UserService, private auth: AuthenticationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUserName();
  }


    getUserName() {
       return this.userService.getUserById(localStorage.getItem('userID')).subscribe(user => this.user = user);
    }

    userSettings() {
      this.dialog.open(UserSettingsComponent);

    }

}
