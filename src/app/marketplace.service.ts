import { Injectable } from '@angular/core';
import {MarketplaceItem} from './marketplace-item';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    marketplaceItems: MarketplaceItem[];
    marketplaceItem: MarketplaceItem;
    marketplaceItemURL = 'localhost:5001/api/marketplaceItem';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {}

    createItemId() {
        return new Date().getTime() + Math.floor(Math.random() * Math.floor(1000));
    }
    getMarketplaceItems(): Observable<MarketplaceItem[]> {
        return this.http.get<MarketplaceItem>(`${this.marketplaceItemURL}`).pipe(
            map((res) => {
                this.marketplaceItems = res['result'];
                return this.marketplaceItems;
            }));
    }
    getMarketplaceItemById(id: number): Observable<MarketplaceItem> {
        return this.http.get<MarketplaceItem>(`${this.marketplaceItemURL}/${id}`).pipe(
            map((res) => {
                this.marketplaceItem = res['result'];
                return this.marketplaceItem;
            }));
    }
    addMarketplaceItem(item: MarketplaceItem): Observable<MarketplaceItem> {
        this.marketplaceItems.push(item);
        return this.http.post<MarketplaceItem>(this.marketplaceItemURL, item, this.httpOptions);
    }

    removeMarketplaceItem (item: MarketplaceItem): Observable<{}> {
        this.marketplaceItems = this.marketplaceItems.filter(i => i !== item);
        const url = `${this.marketplaceItemURL}/${item.ITEM_ID}`; // DELETE api/heroes/42
        return this.http.delete(url, this.httpOptions);
    }

    updateMarketplaceItem(marketplaceItem: MarketplaceItem): Observable<MarketplaceItem> {
        const updatedItem = this.marketplaceItems.find(item => item.ITEM_ID === marketplaceItem.ITEM_ID );
        this.marketplaceItems[this.marketplaceItems.indexOf(updatedItem)] = marketplaceItem;
        return this.http.put<MarketplaceItem>(this.marketplaceItemURL, MarketplaceItem, this.httpOptions);
    }

}
