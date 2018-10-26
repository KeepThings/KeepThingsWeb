import { Component, OnInit } from '@angular/core';
import {MarketplaceItems} from '../../marketplace-items';
import {MarketplaceService} from '../../marketplace.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
    marketplaceItems: MarketplaceItems;
  constructor(private marketplaceService: MarketplaceService) { }

  ngOnInit() {
      this.getMarktplaceItems();
  }
    getMarktplaceItems(): void {
        this.marketplaceService.getMarketplaceItems().subscribe(
            (res: MarketplaceItems) => {
                this.marketplaceItems = res;
            }
        );
    }

}
