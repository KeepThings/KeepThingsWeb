import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
    user: User;
    usernameFormControl = new FormControl('', [
        Validators.required,
    ]);
    TelNrFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new MyErrorStateMatcher2();
  constructor(private userService: UserService, private snackBar: MatSnackBar, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
      this.userService.getUserById(this.auth.userProfile.sub).subscribe(res => this.user = res.body);
  }

    onSubmit() {
        this.userService.updateUser(this.user).
        subscribe(res => {if (res.status === 204) {
            this.snackBar.open('User update successful!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 5000);
        } else {
            this.snackBar.open('Error updating User!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 5000);
        }}
        );


    }

}
