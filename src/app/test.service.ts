import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {UserItem} from './user-item';


@Injectable({
  providedIn: 'root'
})


export class TestService {

    baseURL = '/api/getUserItems.php?UID=1';
    userItems: UserItem[];
    constructor(private http: HttpClient) {}
    getAll(): Observable<UserItem[]> {
        return this.http.get(`${this.baseURL}`).pipe(
            map((res) => {
                this.userItems = res['result'];
                return this.userItems;
            }));
    }

}