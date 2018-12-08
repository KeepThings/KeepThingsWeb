import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {MatSnackBar} from '@angular/material';

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
  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
      this.userService.getUserById(localStorage.getItem('userID')).subscribe(user => this.user = user);
  }

    onSubmit() {
        this.userService.updateUser(this.user).
        subscribe(data => {
            console.log(data.success);
            if (data.success) {
                this.userService.setUpdate(true);
                this.snackBar.open('User update successful!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            } else {
                this.snackBar.open('Error occured updating User!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            }
        });

    }

}