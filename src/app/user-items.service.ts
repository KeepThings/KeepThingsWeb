import { Injectable } from '@angular/core';
import {UserItem} from './user-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserItemsService {
    baseURL = '/api/getUserItems.php?UID=2';
    userItems: UserItem[];
    constructor(private http: HttpClient) {}
    getUserItems(): Observable<UserItem[]> {
        return this.http.get(`${this.baseURL}`).pipe(
            map((res) => {
                this.userItems = res['result'];
                return this.userItems;
            }));
    }
}
