import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../../authentication.service';
import {User} from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher2();
  user: User;
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private userService: UserService, private snackBar: MatSnackBar, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
    this.lastNameFormControl.setValue(this.user.name);
    this.firstNameFormControl.setValue(this.user.first_name);
  }

  getUser() {
    this.userService.getUserById(this.auth.userProfile.sub).subscribe(res => this.user = res.body);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  onSubmit() {
    this.user.first_name = this.firstNameFormControl.value;
    this.user.name = this.lastNameFormControl.value;
    this.userService.updateUser(this.user).subscribe(res => {
    if (res.status === 204) {
        this.snackBar.open('User update successful!');
        this.closeDialog();
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 5000);

      } else {
        this.snackBar.open('User update failed!');
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 5000);
      }
    });
  }

}
