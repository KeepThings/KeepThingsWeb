import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {FormControl, Validators} from '@angular/forms';

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
  constructor() { }
  ngOnInit() {
  }

}
