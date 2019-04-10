import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {MarketplaceItem} from '../../marketplace-item';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {MarketplaceService} from '../../marketplace.service';
import {UserService} from '../../user.service';
import {User} from '../../user';

@Component({
  selector: 'app-m-idetails',
  templateUrl: './m-idetails.component.html',
  styleUrls: ['./m-idetails.component.css']
})
export class MIDetailsComponent implements OnInit {
    NotOwner: boolean;
    matcher = new MyErrorStateMatcher2();
    marketplaceItem: MarketplaceItem;
    user: User;
    titleFormControl = new FormControl({value: null, disabled: this.NotOwner}, Validators.required);
    descFormControl = new FormControl({value: null, disabled: this.NotOwner}, Validators.required);
    ownerFormControl = new FormControl({value: null, disabled: this.NotOwner}, Validators.required);
    borrowerFormControl = new FormControl({value: null, disabled: this.NotOwner}, Validators.required);
    fromFormControl = new FormControl({value: null, disabled: this.NotOwner}, Validators.required);
    toFormControl = new FormControl({value: null, disabled: this.NotOwner}, Validators.required);


    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private marketplaceService: MarketplaceService,
                private snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit() {
      this.getMarketplaceItem(this.data.ITEM_ID);
      this.getUserName();
      this.checkOwnership();

  }
    getMarketplaceItem(id): void {
        this.marketplaceService.getMarketplaceItemById(id).subscribe(marketplaceItem => this.marketplaceItem = marketplaceItem);
    }

    getUserName() {
        this.user = this.userService.user;
    }

    checkOwnership() {
        if (this.user.USER_ID === this.marketplaceItem.USER_ID) {
            this.NotOwner = false;
        } else {
            this.NotOwner = true;
        }
    }

    onSubmit() {
        this.marketplaceService.updateMarketplaceItem(this.marketplaceItem).subscribe();
        this.snackBar.open('Marketplace Item update successful!');
        setTimeout(() => {
            this.snackBar.dismiss();
        }, 5000);

    }
}
