import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {MarketplaceItems} from '../../marketplace-items';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserItemsService} from '../../user-items.service';
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

    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private marketplaceService: MarketplaceService) { }

  ngOnInit() {
      this.getMarketplaceItem(this.data.ITEM_ID);
  }
    getMarketplaceItem(id): void {
        this.marketplaceService.getMarketplaceItem(id).subscribe(userItem => this.marketplaceItem = userItem);
    }
}
