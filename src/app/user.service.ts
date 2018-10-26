import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    baseURL = '/api/getUsers.php?UID=1';
    user: User;
    constructor(private http: HttpClient) {}
    getUserById(): Observable<User> {
        return this.http.get(`${this.baseURL}`).pipe(
            map((res) => {
                this.user = res['result'];
                return this.user;
            }));
    }
}
