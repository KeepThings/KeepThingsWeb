import {Injectable, OnInit} from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators/catchError';
import {AuthenticationService} from './authentication.service';
import {UserItem} from './user-item';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

    user: User;
    update = false;
    httpOptions = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    };
    userUrl = '/api/user';
    constructor(private http: HttpClient, private auth: AuthenticationService) {}

    ngOnInit(): void {

    }

    getUserById(Auth0Id): Observable<User> {
        return this.http.get<User>(`${this.userUrl}/${Auth0Id}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)} ).pipe(tap(data => this.user = data));
    }

    updateUser(user: User): Observable<HttpResponse<User>> {
        this.user = user;
        return this.http.put<User>(`${this.userUrl}/${user.id}`, user, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`), observe: 'response' }) ;
    }

    getUser() {
        return this.user;
    }

    getSpecificUser(id): Observable<User> {
        return this.http.get<User>(`${'/api/specificuser'}/${id}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)});
    }

    addUser(user): Observable <HttpResponse<User>> {
        const response = this.http.post('https://keepthings.eu.auth0.com/dbconnections/signup', {
            'client_id': 'darTWkOKmvvDIwIKw2Qaw6hTuakyHsFy',
            'email': 'fruitglemon@gmail.com',
            'password': 'Test123',
            'connection': 'Username-Password-Authentication'});
        console.log(response);
        return this.http.post<User>(this.userUrl, user, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`), observe: 'response' });
    }

    getUsers() {
        return this.http.get<User[]>(`${this.userUrl}`, this.httpOptions );
    }



}
