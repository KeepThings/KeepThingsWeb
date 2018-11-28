import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


interface isLoggedIn {
    status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

    user: User;
    constructor(private http: HttpClient) {}
    getUserById(UID): Observable<User> {
        return this.http.get<User>('/api/getUsers.php?UID=' + UID).pipe(
            map((res) => {
                this.user = res['result'];
                return this.user;
            }));
    }

    isLoggedIn(): Observable<isLoggedIn> {
        return this.http.get<isLoggedIn>('/api/isloggedin.php');
    }
    getUsername() {
        return this.user.USERNAME;
    }
}
