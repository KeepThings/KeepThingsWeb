import { Component, OnInit } from '@angular/core';
import {MarketplaceItems} from '../../marketplace-items';
import {MarketplaceService} from '../../marketplace.service';
import {MatDialog} from '@angular/material';
import {MIDetailsComponent} from '../m-idetails/m-idetails.component';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
    marketplaceItems: MarketplaceItems[];
    marketplaceItem: MarketplaceItems;
    sub: Subscription;
  constructor(private marketplaceService: MarketplaceService, private dialog: MatDialog) { }

  ngOnInit() {
      this.getMarketplaceItems();
      this.sub = Observable.interval(1000)
          .subscribe((val) => {
                  if (this.marketplaceService.needUpdate()) {
                      this.getMarketplaceItems();
                      this.marketplaceService.setUpdate(false);

                  }
               });
  }


    changeCursor(value: boolean) {
        if (value) {
            document.body.style.cursor = 'pointer';
        } else if (!value) {
            document.body.style.cursor = 'default';
        }
    }
    getMarketplaceItems(): void {
        
        this.marketplaceService.getMarketplaceItems().subscribe(marketplaceItems => this.marketplaceItems = marketplaceItems);
        console.log(this.marketplaceItems);
    }


    details(id: number): void {
        this.dialog.open(MIDetailsComponent, {data: {ITEM_ID: id
            }
        }) ;

    }
}
