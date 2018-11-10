import { Injectable } from '@angular/core';
import {UserItem} from './user-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface insertResponse{
    success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserItemsService {
    userItems: UserItem[];
    constructor(private http: HttpClient) {}
    getUserItems(UID): Observable<UserItem[]> {
        return this.http.get('/api/getUserItems.php?UID=' + UID).pipe(
            map((res) => {
                this.userItems = res['result'];
                return this.userItems;
            }));
    }
    addUserItem(ITEM_NAME, ITEM_DESC, USER_ID, BORROWER, DATE_FROM, DATE_TO) {
        return this.http.get<insertResponse>('/api/addEntry.php?ITEM_NAME=' + ITEM_NAME + '&ITEM_DESC=' + ITEM_DESC + '&USER_ID=' + USER_ID + '&BORROWER=' + BORROWER + '&DATE_FROM=' + DATE_FROM + '&DATE_TO=' + DATE_TO);
    }
}
