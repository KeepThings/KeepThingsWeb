import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  telNrFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher2();
  constructor(private userService: UserService, private snackBar: MatSnackBar) { }


  onSubmit() {
    this.userService.addUser({auth0_id: '', name: this.lastNameFormControl.value, first_name: this.firstNameFormControl.value, password: this.passwordFormControl.value, email: this.emailFormControl.value, tel_nr: this.telNrFormControl.value, type: 'User', verified: 0}).subscribe(res => {
      if (res.status === 400) {
        this.snackBar.open('User creation successful!');
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 5000);
      } else {
        this.snackBar.open('User creation failed!');
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 5000);
      }
    });
  }

}
