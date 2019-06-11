import {Injectable, OnInit} from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

    user: User;
    update = false;
    httpOptions = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    };
    userUrl = environment.database.url + '/user';
    constructor(private http: HttpClient, private auth: AuthenticationService) {}

    ngOnInit(): void {

    }

    getUserById(Auth0Id): Observable<HttpResponse<User>> {
        return this.http.get<User>(`${this.userUrl}/${Auth0Id}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`), observe: 'response'} ).pipe(tap(res => this.user = res.body));
    }

    updateUser(user: User): Observable<HttpResponse<User>> {
        return this.http.put<User>(`${this.userUrl}/${this.auth.userProfile.sub}`, user, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`), observe: 'response' })
            .pipe(tap(
                () => this.user = user));
    }

    getUser() {
        return this.user;
    }

    getSpecificUser(id): Observable<User> {
        return this.http.get<User>(`${environment.database.url +'/usernameid'}/${id}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)});
    }
    getListOfUsernames(): Observable<[]> {
        return this.http.get<[]>(environment.database.url +'/usernameid', {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)});
    }

    addUser(user): Observable <HttpResponse<User>> {
        const response = this.http.post('https://keepthings.eu.auth0.com/dbconnections/signup', {
            'client_id': 'darTWkOKmvvDIwIKw2Qaw6hTuakyHsFy',
            'email': 'fruitglemon@gmail.com',
            'password': '',
            'connection': 'Username-Password-Authentication'});
        console.log(response);
        return this.http.post<User>(this.userUrl, user, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`), observe: 'response' });
    }

    getUsers() {
        return this.http.get<User[]>(`${this.userUrl}`, this.httpOptions );
    }



}
