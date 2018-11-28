import { Component, OnInit } from '@angular/core';
import {MarketplaceItems} from '../../marketplace-items';
import {MarketplaceService} from '../../marketplace.service';
import {UIDetailsComponent} from '../u-idetails/u-idetails.component';
import {MatDialog} from '@angular/material';
import {MIDetailsComponent} from '../m-idetails/m-idetails.component';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
    marketplaceItems: MarketplaceItems[];
    marketplaceItem: MarketplaceItems;
  constructor(private marketplaceService: MarketplaceService, private dialog: MatDialog) { }

  ngOnInit() {
     // this.getMarktplaceItems();
      this.getMarketplaceItems();
  }
  /*  getMarktplaceItems(): void {
        this.marketplaceService.getMarketplaceItems().subscribe(
            (res: MarketplaceItems) => {
                this.marketplaceItems = res;
            }
        );
    } */

    changeCursor(value: boolean) {
        if(value){
            document.body.style.cursor = 'pointer';
        }else if(!value){
            document.body.style.cursor = 'default';
        }
    }
    getMarketplaceItems(): void {
        this.marketplaceService.getMarketplaceItems().subscribe(marketplaceItems => this.marketplaceItems = marketplaceItems);
    }
    getMarketplaceItem(id): void {
        this.marketplaceService.getMarketplaceItem(id).subscribe(MarketplaceItem => this.marketplaceItem = MarketplaceItem);
    }
    details(id: number): void {
        this.getMarketplaceItem(id);
        this.dialog.open(MIDetailsComponent, {data: {ITEM_ID: this.marketplaceItem.ITEM_ID, ITEM_NAME: this.marketplaceItem.ITEM_NAME,
                ITEM_DESC: this.marketplaceItem.ITEM_DESC, OWNER: this.marketplaceItem.OWNER, BORROWER: this.marketplaceItem.BORROWER, DATE_FROM: this.marketplaceItem.DATE_FROM,
                DATE_TO: this.marketplaceItem.DATE_TO,
            }
        }) ;

    }
}
