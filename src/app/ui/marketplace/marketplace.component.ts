import { Component, OnInit } from '@angular/core';
import {MarketplaceItem} from '../../marketplace-item';
import {MarketplaceService} from '../../marketplace.service';
import {MatDialog} from '@angular/material';
import {MIDetailsComponent} from '../m-idetails/m-idetails.component';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {UserItem} from '../../user-item';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
    marketplaceItems: MarketplaceItem[];
    marketplaceItem: MarketplaceItem;
    sub: Subscription;
    user: User;
  constructor(private marketplaceService: MarketplaceService, private dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
      this.getMarketplaceItems();
  }


    changeCursor(value: boolean) {
        if (value) {
            document.body.style.cursor = 'pointer';
        } else if (!value) {
            document.body.style.cursor = 'default';
        }
    }


    removeItem(marketplaceItem: MarketplaceItem) {
        this.marketplaceItems = this.marketplaceItems.filter(i => i !== marketplaceItem);
        this.marketplaceService.removeMarketplaceItem(marketplaceItem).subscribe();
    }

    getMarketplaceItems(): void {
        this.marketplaceService.getMarketplaceItems().subscribe(marketplaceItems => this.marketplaceItems = marketplaceItems);
        this.marketplaceItems.filter(i => i.USER_ID === this.userService.user.USER_ID);
    }


    details(id: number): void {
        this.dialog.open(MIDetailsComponent, {data: {ITEM_ID: id
            }
        }) ;

    }
}
