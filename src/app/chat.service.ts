import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Chat} from './chat';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats: Chat[];
  chatUrl = environment.database.url+'/chat';
  httpOptions = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
  };

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getChatByUserId(id: number): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.chatUrl}/${id}`, this.httpOptions);

  }

  addChat(chat): Observable<Chat> {
    return this.http.post<Chat>(this.chatUrl, chat, this.httpOptions);
  }


}
