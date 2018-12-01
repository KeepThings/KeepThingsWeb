import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {UserItemsService} from '../../user-items.service';
import {UserItem} from '../../user-item';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';

@Component({
  selector: 'app-u-idetails',
  templateUrl: './u-idetails.component.html',
  styleUrls: ['./u-idetails.component.css'],
})
export class UIDetailsComponent implements OnInit {
    titleFormControl = new FormControl('', [
        Validators.required,
    ]);
    descFormControl = new FormControl('', [
        Validators.required,
    ]);
    ownerFormControl = new FormControl('', [
        Validators.required,
    ]);
    borrowerFormControl = new FormControl('', [
        Validators.required,
    ]);
    fromFormControl = new FormControl('', [
        Validators.required,
    ]);
    toFormControl = new FormControl('', [
        Validators.required,
    ]);
    matcher = new MyErrorStateMatcher2();

    userItem: UserItem;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private userItemService: UserItemsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.getUserItem(this.data.ITEM_ID);
      console.log(this.userItem);
  }
    getUserItem(id): void {
      console.log(id);
        this.userItemService.getUserItem(id).subscribe(userItem => this.userItem = userItem);
    }

    onSubmit() {
        // this.snackBar.open('Test');
        this.userItemService.updateUserItem(this.userItem).
        subscribe(data => {
            console.log(data.success);
            if (data.success) {
                this.snackBar.open('User Item update successful!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            } else {
                this.snackBar.open('Error occured updating User Item!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            }
        });

    }
}
