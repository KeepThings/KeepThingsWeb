import {Injectable, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserItem} from './user-item';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {AuthenticationService} from './authentication.service';
import {tap} from 'rxjs/internal/operators/tap';
import {catchError} from 'rxjs/internal/operators/catchError';
import {response} from 'express';
import {environment} from '../environments/environment';

interface InsertResponse {
    success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserItemsService implements OnInit {
    userItems: UserItem[];
    userItem: UserItem;
    update = false;
    userItemUrl = environment.database.url+'/userItem';
    httpOptions = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    };

    constructor(private http: HttpClient, private datepipe: DatePipe, private auth: AuthenticationService) {}

    ngOnInit(): void {
    }

    createItemId() {
        return new Date().getTime() + Math.floor(Math.random() * Math.floor(1000));
    }

    syncUserItems() {
        return this.userItems;
    }

    getUserItems(): Observable<UserItem[]> {
        return this.http.get<UserItem[]>(`${this.userItemUrl}`, this.httpOptions ).pipe(tap(data => this.userItems = data));
    }
    getUserItemById(id: number): Observable<UserItem> {
        return this.http.get<UserItem>(`${this.userItemUrl}/${id}`, this.httpOptions).pipe(tap(data => this.userItem = data));
    }
    addUserItem(item: UserItem): Observable<UserItem> {
        return this.http.post<UserItem>(this.userItemUrl, item, this.httpOptions).pipe(
            tap((newUserItem: UserItem) => this.userItems.push(newUserItem))
        );
    }

    removeUserItem (item: UserItem): Observable<{}> {
        this.userItems = this.userItems.filter(i => i !== item);
        const url = `${this.userItemUrl}/${item.id}`;
        return this.http.delete(url, this.httpOptions);
    }

    transformDate(date) {
        return this.datepipe.transform(date, 'yyyy-MM-dd');
    }

    updateUserItem(userItem: UserItem): Observable<HttpResponse<UserItem>> {
        const updatedItem = this.userItems.find(item => item.id === userItem.id );
        this.userItems[this.userItems.indexOf(updatedItem)] = userItem;
        return this.http.put<UserItem>(`${this.userItemUrl}/${userItem.id}`, userItem, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`), observe: 'response'});
    }

}
