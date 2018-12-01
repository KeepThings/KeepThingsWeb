import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


interface IsLoggedIn {
    status: boolean;
}
interface UpdateResponse {
    success: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

    user: User;
    update = false;
    constructor(private http: HttpClient) {}
    getUserById(UID): Observable<User> {
        return this.http.get<User>('/api/getUsers.php?UID=' + UID).pipe(
            map((res) => {
                this.user = res['result'];
                return this.user;
            }));
    }

    isLoggedIn(): Observable<IsLoggedIn> {
        return this.http.get<IsLoggedIn>('/api/isloggedin.php');
    }
    updateUser(user: User) {
        this.setUpdate(true);
        return this.http.get<UpdateResponse>('/api/updateUsers.php?UID=' + user.USER_ID
            + '&NAME=' + user.NAME
            + '&FIRST_NAME=' + user.FIRST_NAME
            + '&PASSWORD=' + user.PASSWORD
            + '&USERNAME=' + user.USERNAME
            + '&VERIFIED=' + user.VERIFIED
            + '&TEL_NR=' + user.TEL_NR
            + '&EMAIL=' + user.EMAIL
            + '&TYPE=' + user.TYPE);
    }
    setUpdate(bool) {
        this.update = bool;
    }
    needUpdate(): boolean {
        return this.update;
    }
}
