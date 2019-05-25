import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';


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
    // accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1rSkdOVU14UWtRNFJVSTJSREEwTmtRMlJrUkRPVEkwTWtJd05qZEVRalV4TVVVeE5VRTNSUSJ9.eyJpc3MiOiJodHRwczovL2tlZXB0aGluZ3MuZXUuYXV0aDAuY29tLyIsInN1YiI6IlNKT3gyeW5YNXVyY0xEdEZCNTRPaW5URjNvbUFMd1BRQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS8iLCJpYXQiOjE1NTYyODc0MzIsImV4cCI6MTU1NjM3MzgzMiwiYXpwIjoiU0pPeDJ5blg1dXJjTER0RkI1NE9pblRGM29tQUx3UFEiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.XlDHpzrLylqcgoUfPXlTigyMLYIpmelqKNHVX-2o4xQATnlc9SIy15dGsSYq1xonzW0O5nO6ldYBhlgR-1xK1r6JT621kubORRTMFXeZiB0V_btIAnQxWqiRfS9G-lKFCMIC8kcc-haWGoUrAkMXVDqQhBNui8PLNKFpOKQh_5ECKc2LRaWUN6fs2fBrPCmZXT7QSggZBA6yToJjczb0KSQfG2xsKd2H-iNeT1xmFhnWez6rihmHQjOkETo24cvuuu0Ef7Yt2cNj2h7IgvMc6arAD106IjhBpAZVNaDf8QdB2VeMXXIpnXKjXcHUvTSgrHRl2PvmyZIEodNJg3bnJg';
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
        this.router.navigate(['/dashboard']);
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


}
