import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {Observable} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
    user: User;
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);
    EMailFormControl = new FormControl('', [
        Validators.required,
    ]);
    usernameFormControl = new FormControl('', [
        Validators.required,
    ]);
    TelNrFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new MyErrorStateMatcher2();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
     return this.userService.getUserById(localStorage.getItem('userID')).subscribe(user => this.user = user);
  }

}
