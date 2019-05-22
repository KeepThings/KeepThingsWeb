import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatSnackBar} from '@angular/material';
import {UserItemsService} from '../../user-items.service';
import {DatePipe} from '@angular/common';
import {UserItem} from '../../user-item';
import {UserService} from '../../user.service';
import {User} from '../../user';

@Component({
  selector: 'app-new-entry-form',
  templateUrl: './new-entry-form.component.html',
  styleUrls: ['./new-entry-form.component.css']
})
export class NewEntryFormComponent implements OnInit {


    titleFormControl = new FormControl('', [
        Validators.required,
    ]);
    descFormControl = new FormControl('', [
        Validators.required,
    ]);
    personFormControl = new FormControl('', [
        Validators.required,
    ]);
    fromFormControl = new FormControl('', [
        Validators.required,
    ]);
    toFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new MyErrorStateMatcher2();
  constructor(private userItemService: UserItemsService, private snackBar: MatSnackBar, private datepipe: DatePipe, private userService: UserService) { }

    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }
  ngOnInit() {
  }

  addUserItem(userItem) {
    this.userItemService.addUserItem(userItem).subscribe(item => this.userItemService.userItems.push(item));
      this.snackBar.open('Entry creation successful!');
      setTimeout(() => {
          this.snackBar.dismiss();
      }, 5000);
  }
    onSubmit(form) {
        if (this.titleFormControl.invalid || this.descFormControl.invalid || this.personFormControl.invalid ||
            this.fromFormControl.invalid || this.toFormControl.invalid) {
            this.snackBar.open('All fields are required!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 5000);
        } else {
            const item = {item_name: this.titleFormControl.value, item_desc: this.descFormControl.value, user_id: this.userService.user.id, borrower: this.personFormControl.value, date_from: this.transformDate(this.fromFormControl.value), date_to: this.transformDate(this.toFormControl.value)};
            this.addUserItem(item);
            this.titleFormControl.reset('');
            this.descFormControl.reset('');
            this.personFormControl.reset('');
            this.fromFormControl.reset('');
            this.toFormControl.reset('');
            form.resetForm();
        }

    }

}
export class MyErrorStateMatcher2 implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form.submitted;
        return !!(control && control.invalid && (control.dirty || isSubmitted));
    }
}
