import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {AuthenticationService} from '../../authentication.service';
import {MatSnackBar} from '@angular/material';
import {LoginErrorComponent} from './login-error/login-error.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new MyErrorStateMatcher();
    ngOnInit() {

    }
    constructor(private Auth: AuthenticationService, private snackBar: MatSnackBar, private router: Router) {}

    onSubmit() {

        this.Auth.getUserDetails(this.emailFormControl.value, this.passwordFormControl.value).subscribe(data => {
            if (data.success) {
                this.snackBar.dismiss();
                this.router.navigate(['dashboard']);
                this.Auth.setLoggedIn(true);
                this.Auth.setUID(data.uid);
            } else {
                this.snackBar.openFromComponent(LoginErrorComponent);
            }
        });


    }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}




