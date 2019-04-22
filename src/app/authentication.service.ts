import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';
import {timeout} from 'q';

interface Data {
    success: boolean;
    uid: number;
}
interface Response {
    success: boolean;
}
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
    accessToken: string;
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
                console.log('Drinnen #1');
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
                console.log(('Drinnen #session'));
                this._setSession(authResult, profile);
            }
        });
    }

    private _setSession(authResult, profile) {
        console.log('auth result:' + authResult + 'profile:' + profile);
        // Save authentication data and update login status subject
        this.expiresAt = authResult.expiresIn * 36000 + Date.now();
        this.accessToken = authResult.accessToken;
        this.userProfile = profile;
        this.authenticated = true;
        this.router.navigate(['dashboard']);
    }

    logout() {
        // Log out of Auth0 session
        // Ensure that returnTo URL is specified in Auth0
        // Application settings for Allowed Logout URLs
        this.auth0.logout({
            returnTo: 'http://localhost:4200',
            clientID: environment.auth.clientID
        });
    }

    get isLoggedIn(): boolean {
        // Check if current date is before token
        // expiration and user is signed in locally
        return Date.now() < this.expiresAt && this.authenticated;
    }

  setLoggedIn(value: boolean) {
      this.loggedInStatus = value;
  }
  setUID(uid) {
      this.uid = uid;
      localStorage.setItem('userID', this.uid );
  }
  get UID() {
      return this.uid;
  }
  /*get isLoggedIn() {
     return this.loggedInStatus;
  }*/
  getUserDetails(email, password) {
  return this.http.post<Data>('/api/auth.php', {
      responseType: 'text', email, password
  });
  }
  /*logout() {
      this.setLoggedIn(false);
      localStorage.removeItem('userID');
      this.uid = null;
  }*/
}
