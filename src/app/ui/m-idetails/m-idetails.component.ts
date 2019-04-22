import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {MarketplaceItem} from '../../marketplace-item';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {MarketplaceService} from '../../marketplace.service';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {MarketplaceComponent} from '../marketplace/marketplace.component';

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
      this.getMarketplaceItem(this.data.id);
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
        if (this.user.id === this.marketplaceItem.id) {
            this.NotOwner = false;
        } else {
            this.NotOwner = true;
        }
    }

    checkUserInput(): boolean {
        if (this.fromFormControl.value < this.toFormControl) {
            return true;
        } else {
            return false;
        }
    }

    onSubmit() {
        if (this.checkUserInput()) {
            this.marketplaceService.updateMarketplaceItem(this.marketplaceItem).subscribe();
            this.snackBar.open('Marketplace Item update successful!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 5000);
        } else {
            this.snackBar.open('Start date has to be earlier than end date!');
            setTimeout(() => {
                this.snackBar.dismiss();
            }, 3000);
        }


    }
}
