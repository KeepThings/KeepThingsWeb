import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatSnackBar} from '@angular/material';
import {UserItemsService} from '../../user-items.service';
import {DatePipe} from '@angular/common';

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
  constructor(private userItemService: UserItemsService, private snackBar: MatSnackBar, private datepipe: DatePipe) { }

    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }
  ngOnInit() {
  }
    onSubmit() {
        if (this.titleFormControl.invalid || this.descFormControl.invalid || this.personFormControl.invalid ||
            this.fromFormControl.invalid || this.toFormControl.invalid) {
            this.snackBar.open('All fields are required!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 5000);
        } else {
            this.userItemService.addUserItem(this.titleFormControl.value, this.descFormControl.value,
                localStorage.getItem('userID'), this.personFormControl.value, this.transformDate(this.fromFormControl.value),
                this.transformDate(this.toFormControl.value))
                .subscribe(data => {
                if (data.success) {
                    this.snackBar.open('Request creation successful!');
                    this.userItemService.setUpdate(true);
                    this.titleFormControl.setValue(' ');
                    this.personFormControl.setValue(' ');
                    this.descFormControl.setValue(' ');
                    this.fromFormControl.setValue(' ');
                    this.toFormControl.setValue(' ');
                    setTimeout(() => {
                        this.snackBar.dismiss();
                    }, 5000);
                } else {
                    this.snackBar.open('ERROR inserting Data');
                    setTimeout(() => {
                        this.snackBar.dismiss();
                    }, 5000);
                }
            });
        }

    }

}
export class MyErrorStateMatcher2 implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form.submitted;
        return !!(control && control.invalid && (control.dirty || isSubmitted));
    }
}
