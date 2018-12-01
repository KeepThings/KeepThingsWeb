import { Injectable } from '@angular/core';
import {UserItem} from './user-item';
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
export class UserItemsService {
    userItems: UserItem[];
    userItem: UserItem;
    update = false;
    constructor(private http: HttpClient, private datepipe: DatePipe) {}

    getUserItems(UID): Observable<UserItem[]> {
        return this.http.get<UserItem>('/api/getUserItems.php?UID=' + UID).pipe(
            map((res) => {
                this.userItems = res['result'];
                return this.userItems;
            }));
    }
    getUserItem(id: number): Observable<UserItem> {
        return this.http.get<UserItem>('/api/getUserItems.php?IID=' + id).pipe(
            map((res) => {
                this.userItem = res['result'];
                return this.userItem;
            }));
    }
    addUserItem(ITEM_NAME, ITEM_DESC, USER_ID, BORROWER, DATE_FROM, DATE_TO) {
        return this.http.get<InsertResponse>('/api/addEntry.php?ITEM_NAME=' + ITEM_NAME + '&ITEM_DESC='
            + ITEM_DESC + '&USER_ID=' + USER_ID + '&BORROWER=' + BORROWER + '&DATE_FROM=' + DATE_FROM + '&DATE_TO=' + DATE_TO);
    }

    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }

    updateUserItem(userItem: UserItem) {
        this.setUpdate(true);
        return this.http.get<InsertResponse>('/api/updateUserItems.php?IID=' + userItem.ITEM_ID
            + '&ITEM_NAME=' + userItem.ITEM_NAME
            + '&ITEM_DESC=' + userItem.ITEM_DESC
            + '&USERNAME=' + userItem.OWNER
            + '&BORROWER=' + userItem.BORROWER
            + '&DATE_FROM=' + this.transformDate(userItem.DATE_FROM)
            + '&DATE_TO=' + this.transformDate(userItem.DATE_TO));

    }
    setUpdate(bool) {
        this.update = bool;
    }

    needUpdate(): boolean {
        return this.update;
    }
}
