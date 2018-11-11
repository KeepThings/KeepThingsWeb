import {Component, Inject, OnInit} from '@angular/core';
import {ErrorStateMatcher, MAT_DIALOG_DATA} from '@angular/material';
import {UserItemsService} from '../../user-items.service';
import {UserItem} from '../../user-item';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private userItemService: UserItemsService) { }

  ngOnInit() {
      this.getMockUserItem(this.data.ITEM_ID);
  }
    getMockUserItem(id): void {
        this.userItemService.getUserItemMock(id).subscribe(userItem => this.userItem = userItem);
    }
}
