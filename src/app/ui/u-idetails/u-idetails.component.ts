import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {UserItemsService} from '../../user-items.service';
import {UserItem} from '../../user-item';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {HandlerService} from '../../handler.service';
import {DatePipe} from '@angular/common';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {NewMessageComponent} from '../newMessage/new-message.component';

@Component({
  selector: 'app-u-idetails',
  templateUrl: './u-idetails.component.html',
  styleUrls: ['./u-idetails.component.css'],
})
export class UIDetailsComponent implements OnInit {
    titleFormControl = new FormControl({value: '', disabled: false}, Validators.required);
    descFormControl = new FormControl({value: '', disabled: false}, Validators.required);
    ownerFormControl = new FormControl({value: '', disabled: true}, Validators.required);
    borrowerFormControl = new FormControl({value: '', disabled: false}, Validators.required);
    fromFormControl = new FormControl({value: '', disabled: false}, Validators.required);
    toFormControl = new FormControl({value: '', disabled: false}, Validators.required);
    matcher = new MyErrorStateMatcher2();

    userItem: UserItem;
    user: User;
    owner: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private userItemService: UserItemsService, private snackBar: MatSnackBar, private handler: HandlerService, private datepipe: DatePipe, private userService: UserService) { }

  ngOnInit() {
      this.getUserItem(this.data.id);
  }

    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }
    getUserItem(id): void {
        this.userItemService.getUserItemById(id).subscribe(userItem => {
            this.userItem = userItem;
            this.titleFormControl.setValue(this.userItem.item_name);
            this.descFormControl.setValue(this.userItem.item_desc);
            this.borrowerFormControl.setValue(this.userItem.borrower);
            this.fromFormControl.setValue(this.userItem.date_from);
            this.toFormControl.setValue(this.userItem.date_to);
            this.getUsername();
        });
    }

    getUsername() {
        this.userService.getSpecificUser(this.userItem.user_id).subscribe(res => {
            this.user = res;
            this.ownerFormControl.setValue(this.user.username);
            this.checkOwnership();
        });
    }

    checkOwnership() {
        if (this.userService.user && this.userItem) {
            if (this.userService.user.id === this.userItem.user_id) {
                this.owner = true;
                this.titleFormControl.enable();
                this.descFormControl.enable();
                this.borrowerFormControl.enable();
                this.fromFormControl.enable();
                this.toFormControl.enable();
            } else {
                this.owner = false;
                this.titleFormControl.disable();
                this.descFormControl.disable();
                this.borrowerFormControl.disable();
                this.fromFormControl.disable();
                this.toFormControl.disable();
            }
        }
    }

    onSubmit() {
        this.checkOwnership();
        if (true) {
            this.userItemService.updateUserItem({id: this.userItem.id, item_name: this.titleFormControl.value, item_desc: this.descFormControl.value, user_id: this.user.id, borrower: this.borrowerFormControl.value, date_from: this.transformDate(this.fromFormControl.value), date_to: this.transformDate(this.toFormControl.value)}).subscribe(res => {if (res.status === 204) {
                this.snackBar.open('User Item successful!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            } else {
                this.snackBar.open('Error updating User Item!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            }});


        } else {
            this.snackBar.open('Start date has to be earlier than end date!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 3000);
        }
    }



}
