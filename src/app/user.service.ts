import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators/catchError';
import {AuthenticationService} from './authentication.service';


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
    constructor(private http: HttpClient, private auth: AuthenticationService) {}

    getUserById(UID): Observable<User> {
        return this.http.get<User>('/api/user/1', {
            headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
        }).pipe(tap(data => this.user = data));
    }
    
    updateUser(user: User) {
        this.user = user;
        return this.http.get<UpdateResponse>('/api/updateUsers.php?UID=' + user.id
            + '&NAME=' + user.name
            + '&FIRST_NAME=' + user.first_name
            + '&password=' + user.password
            + '&username=' + user.username
            + '&verified=' + user.verified
            + '&tel_nr=' + user.tel_nr
            + '&email=' + user.email
            + '&type=' + user.type);
    }


}
