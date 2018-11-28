import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

interface myData {
    success: boolean;
    uid: number;
}
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

    loggedInStatus = false;
    uid = null;
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
      this.loggedInStatus = value;
  }
  setUID(uid) {
      this.uid = uid;
      localStorage.setItem('userID', this.uid );
      console.log(localStorage.getItem('userID'));
  }
  get UID() {
      return this.uid;
  }
  get isLoggedIn() {
      return this.loggedInStatus;
  }
  getUserDetails(email, password) {
  return this.http.post<myData>('/api/auth.php', {
      email, password
  });
  }
}
