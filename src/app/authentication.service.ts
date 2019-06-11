import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';
import {UserService} from './user.service';
import {User} from './user';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

    loggedInStatus = false;
    uid = null;
    auth0 = new auth0.WebAuth({
        clientID: environment.auth.clientID,
        domain: environment.auth.domain,
        responseType: 'token',
        redirectUri: environment.auth.redirect,
        audience: environment.auth.audience,
        scope: environment.auth.scope
    });
    // Store authentication data
    expiresAt: number;
    userProfile: any;
    accessToken = null;
    authenticated = false;

    constructor(private http: HttpClient, private router: Router) {
        this.getAccessToken();
    }

    login() {
        // Auth0 authorize request
        this.auth0.authorize();
    }

    handleLoginCallback() {
        // When Auth0 hash parsed, get profile
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                this.getUserInfo(authResult);
            } else if (err) {
                console.error(`Error: ${err.error}`);
            }


        });
    }

    getAccessToken() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken) {
                this.getUserInfo(authResult);
            }
        });
    }

    getUserInfo(authResult) {
        // Use access token to retrieve user's profile and set session
        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
            if (profile) {
                this._setSession(authResult, profile);
            }
        });
    }
    private _setSession(authResult, profile) {
        // Save authentication data and update login status subject
        this.expiresAt = authResult.expiresIn * 36000 + Date.now();
        this.accessToken = authResult.accessToken;
        console.log(authResult);
        // USer KEY
        console.log(profile.sub);
        this.userProfile = profile;
        this.authenticated = true;
        this.getUserById(this.userProfile.sub).subscribe(res => {
            if (res.status !== 200) {
                this.addUser({auth0_id: this.userProfile.sub, name: '', first_name: '', password: '', email: this.userProfile.email, tel_nr: 0, username: this.userProfile.username, type: 'User', verified: true });
            }
            this.router.navigate(['/dashboard']);
        });
    }

    getUserById(Auth0Id): Observable<HttpResponse<User>> {
        return this.http.get<User>(`${environment.database.url + '/user'}/${Auth0Id}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`), observe: 'response'} );
    }

    addUser(user): Observable <HttpResponse<User>> {
        return this.http.post<User>(environment.database.url + '/user', user, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`), observe: 'response' });
    }

    logout() {
        // Log out of Auth0 session
        // Ensure that returnTo URL is specified in Auth0
        // Application settings for Allowed Logout URLs
        this.auth0.logout({
            returnTo: 'http://keepthingsweb.azurewebsites.net/',
            clientID: environment.auth.clientID
        });
    }

    get isLoggedIn(): boolean {
        // Check if current date is before token
        // expiration and user is signed in locally
        return Date.now() < this.expiresAt && this.authenticated;
    }


}
