import { Injectable } from '@angular/core';
import {MarketplaceItems} from './marketplace-items';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MarketplaceService {
    baseURL = '/api/getMarketplaceItems.php?ALL=true';
    marketplaceItems: MarketplaceItems[];
    constructor(private http: HttpClient) {}
    getMarketplaceItems(): Observable<MarketplaceItems[]> {
        return this.http.get(`${this.baseURL}`).pipe(
            map((res) => {
                this.marketplaceItems = res['result'];
                return this.marketplaceItems;
            }));
    }
}
