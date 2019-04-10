import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatSnackBar} from '@angular/material';
import {UserItemsService} from '../../user-items.service';
import {DatePipe} from '@angular/common';
import {UserItem} from '../../user-item';
import {UserService} from '../../user.service';

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

  addUserItem(userItem: UserItem) {
    this.userItemService.addUserItem(userItem).subscribe();
      this.snackBar.open('Entry creation successful!');
      this.userItemService.setUpdate(true);
      this.titleFormControl.setValue(' ');
      this.personFormControl.setValue(' ');
      this.descFormControl.setValue(' ');
      this.fromFormControl.setValue(' ');
      this.toFormControl.setValue(' ');
      setTimeout(() => {
          this.snackBar.dismiss();
      }, 5000);
  }
    onSubmit() {
        if (this.titleFormControl.invalid || this.descFormControl.invalid || this.personFormControl.invalid ||
            this.fromFormControl.invalid || this.toFormControl.invalid) {
            this.snackBar.open('All fields are required!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 5000);
        } else {
            const newItem = new UserItem(this.userItemService.createItemId(), this.titleFormControl.value, this.descFormControl.value, this.userService.user.USER_ID, this.personFormControl.value, this.fromFormControl, this.toFormControl );
            this.addUserItem(newItem);
        }

    }

}
export class MyErrorStateMatcher2 implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form.submitted;
        return !!(control && control.invalid && (control.dirty || isSubmitted));
    }
}
