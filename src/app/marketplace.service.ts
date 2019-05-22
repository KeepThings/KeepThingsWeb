import { Injectable } from '@angular/core';
import {MarketplaceItem} from './marketplace-item';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {tap} from 'rxjs/internal/operators/tap';
import {UserItem} from './user-item';
import {AuthenticationService} from './authentication.service';

interface InsertResponse {
   success: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class MarketplaceService {
    marketplaceItems: MarketplaceItem[];
    marketplaceItem: MarketplaceItem;
    marketplaceItemURL = '/api/marketplaceItem';
    httpOptions = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    };

    constructor(private http: HttpClient, private auth: AuthenticationService) {}

    getMarketplaceItems(): Observable<MarketplaceItem[]> {
        return this.http.get<MarketplaceItem[]>(`${this.marketplaceItemURL}`, this.httpOptions)
            .pipe(tap(data => this.marketplaceItems = data));
    }
    getMarketplaceItemById(id: number): Observable<MarketplaceItem> {
        return this.http.get<MarketplaceItem>(`${this.marketplaceItemURL}/${id}`, this.httpOptions)
            .pipe(tap(data => this.marketplaceItem = data));
    }
    addMarketplaceItem(item: MarketplaceItem): Observable<MarketplaceItem> {
        return this.http.post<MarketplaceItem>(this.marketplaceItemURL, item, this.httpOptions).pipe(
            tap((newMarketplaceItem: MarketplaceItem) => console.log(`${newMarketplaceItem.id}`)
            ));
    }

    removeMarketplaceItem (item: MarketplaceItem): Observable<MarketplaceItem[]> {
        const url = `${this.marketplaceItemURL}/${item.id}`; // DELETE api/heroes/42
        return this.http.delete<MarketplaceItem[]>(url, this.httpOptions).pipe(tap( () => this.marketplaceItems = this.marketplaceItems.filter(i => i !== item)));
    }

    updateMarketplaceItem(marketplaceItem: MarketplaceItem): Observable<HttpResponse<MarketplaceItem>> {
        const updatedItem = this.marketplaceItems.find(item => item.id === marketplaceItem.id );
        this.marketplaceItems[this.marketplaceItems.indexOf(updatedItem)] = marketplaceItem;
        return this.http.put<MarketplaceItem>(`${this.marketplaceItemURL}/${marketplaceItem.id}`, marketplaceItem, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`), observe: 'response'});
    }

}
