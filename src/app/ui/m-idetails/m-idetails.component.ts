import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {MarketplaceItems} from '../../marketplace-items';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {MarketplaceService} from '../../marketplace.service';

@Component({
  selector: 'app-m-idetails',
  templateUrl: './m-idetails.component.html',
  styleUrls: ['./m-idetails.component.css']
})
export class MIDetailsComponent implements OnInit {
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

    marketplaceItem: MarketplaceItems;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private marketplaceService: MarketplaceService,
                private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.getMarketplaceItem(this.data.ITEM_ID);
  }
    getMarketplaceItem(id): void {
        this.marketplaceService.getMarketplaceItem(id).subscribe(marketplaceItem => this.marketplaceItem = marketplaceItem);
    }

    onSubmit() {
        // this.snackBar.open('Test');
        this.marketplaceService.updateMarketplaceItem(this.marketplaceItem).
        subscribe(data => {
            console.log(data.success);
            if (data.success) {
                this.snackBar.open('Marketplace Item update successful!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            } else {
                this.snackBar.open('Error occured updating Marketplace Item!');
                setTimeout(() => {
                    this.snackBar.dismiss();
                }, 5000);
            }
        });

    }
}
