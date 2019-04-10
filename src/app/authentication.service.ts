import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

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
  get isLoggedIn() {
      return this.loggedInStatus;
  }
  getUserDetails(email, password) {
  return this.http.post<Data>('/api/auth.php', {
      responseType: 'text', email, password
  });
  }
  logout() {
      this.setLoggedIn(false);
      localStorage.removeItem('userID');
      this.uid = null;
  }
}
