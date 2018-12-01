import { Injectable } from '@angular/core';
import {MarketplaceItems} from './marketplace-items';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';

interface InsertResponse {
   success: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class MarketplaceService {
    marketplaceItems: MarketplaceItems[];
    marketplaceItem: MarketplaceItems;
    update = false;

    constructor(private http: HttpClient, private  datepipe: DatePipe) {}
    getMarketplaceItems(): Observable<MarketplaceItems[]> {
        return this.http.get<MarketplaceItems[]>('/api/getMarketplaceItems.php?ALL=true').pipe(
            map((res) => {
                this.marketplaceItems = res['result'];
                return this.marketplaceItems;
            }));
    }

    getMarketplaceItem(id: number): Observable<MarketplaceItems> {
        return this.http.get<MarketplaceItems>('/api/getMarketplaceItems.php?IID=' + id).pipe(
            map((res) => {
                this.marketplaceItem = res['result'];
                return this.marketplaceItem;
            }));
    }

    addMarketplaceItem(ITEM_NAME, ITEM_DESC, USER_ID, DATE_FROM, DATE_TO) {
        return this.http.get<InsertResponse>('/api/addRequest.php?ITEM_NAME='
            + ITEM_NAME + '&ITEM_DESC=' + ITEM_DESC + '&USER_ID=' + USER_ID + '&DATE_FROM=' + DATE_FROM + '&DATE_TO=' + DATE_TO);
    }


    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }


    updateMarketplaceItem(marketplaceItem: MarketplaceItems) {
        this.setUpdate(true);
        return this.http.get<InsertResponse>('/api/updateMarketplaceItems.php?IID=' + marketplaceItem.ITEM_ID
            + '&ITEM_NAME=' + marketplaceItem.ITEM_NAME
            + '&ITEM_DESC=' + marketplaceItem.ITEM_DESC
            + '&USERNAME=' + marketplaceItem.OWNER
            + '&BORROWER=' + marketplaceItem.BORROWER
            + '&DATE_FROM=' + this.transformDate(marketplaceItem.DATE_FROM)
            + '&DATE_TO=' + this.transformDate(marketplaceItem.DATE_TO));

    }

    setUpdate(bool) {
        this.update = bool;
    }
    needUpdate() {
        return this.update;
    }
}
