import { Injectable } from '@angular/core';
import {UserItem} from './user-item';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';

interface InsertResponse {
    success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserItemsService {
    userItems: UserItem[];
    userItem: UserItem;
    update = false;
    userItemUrl = 'localhost:5001/api/userItem';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
    };
    constructor(private http: HttpClient, private datepipe: DatePipe) {}



    createItemId() {
        return new Date().getTime() + Math.floor(Math.random() * Math.floor(1000));
    }

    getUserItems(): Observable<UserItem[]> {
        return this.http.get<UserItem>(`${this.userItemUrl}`).pipe(
            map((res) => {
                this.userItems = res['result'];
                return this.userItems;
            }));
    }
    getUserItemById(id: number): Observable<UserItem> {
        return this.http.get<UserItem>(`${this.userItemUrl}/${id}`).pipe(
            map((res) => {
                this.userItem = res['result'];
                return this.userItem;
            }));
    }
    addUserItem(item: UserItem): Observable<UserItem> {
        item.ITEM_ID = this.createItemId();
        this.userItems.push(item);
        return this.http.post<UserItem>(this.userItemUrl, item, this.httpOptions);
    }

    removeUserItem (item: UserItem): Observable<{}> {
        this.userItems = this.userItems.filter(i => i !== item);
        const url = `${this.userItemUrl}/${item.ITEM_ID}`; // DELETE api/heroes/42
        return this.http.delete(url, this.httpOptions);
    }

    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }

    updateUserItem(userItem: UserItem): Observable<UserItem> {
        const updatedItem = this.userItems.find(item => item.ITEM_ID === userItem.ITEM_ID );
        this.userItems[this.userItems.indexOf(updatedItem)] = userItem;
        return this.http.put<UserItem>(this.userItemUrl, userItem, this.httpOptions);
    }
    setUpdate(bool) {
        this.update = bool;
    }


}
