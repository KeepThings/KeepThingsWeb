import { Injectable } from '@angular/core';
import {MarketplaceItems} from './marketplace-items';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {MARKETPLACE_ITEMS} from './mock-marketplace-items';

interface insertResponse {
   success: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class MarketplaceService {
    baseURL = '/api/getMarketplaceItems.php?ALL=true';
    marketplaceItems: MarketplaceItems[];
    constructor(private http: HttpClient) {}
    /*getMarketplaceItems(): Observable<MarketplaceItems[]> {
        return this.http.get(`${this.baseURL}`).pipe(
            map((res) => {
                this.marketplaceItems = res['result'];
                return this.marketplaceItems;
            }));
    } */

    addMarketplaceItem(ITEM_NAME, ITEM_DESC, USER_ID, DATE_FROM, DATE_TO) {
        return this.http.get<insertResponse>('/api/addRequest.php?ITEM_NAME=' + ITEM_NAME + '&ITEM_DESC=' + ITEM_DESC + '&USER_ID=' + USER_ID + '&DATE_FROM=' + DATE_FROM + '&DATE_TO=' + DATE_TO);
    }

    getMarketplaceItems(): Observable<MarketplaceItems[]> {
        return of(MARKETPLACE_ITEMS);
    }

    getMarketplaceItem(id: number): Observable<MarketplaceItems> {
        return of(MARKETPLACE_ITEMS.find(marketplaceItem => marketplaceItem.ITEM_ID === id));
    }
}
