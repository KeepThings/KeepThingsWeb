import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserItem} from './user-item';
import {map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from './message';
import {AuthenticationService} from './authentication.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    messages: Message[];
    messageURL = environment.database.url + '/message';
    httpOptions = {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    };

  constructor(private http: HttpClient, private auth: AuthenticationService) { }


  getMessageById(id: number): Observable<Message> {
    return this.http.get<Message>(`${this.messageURL}/${id}`, this.httpOptions);

  }

  // GET ALL MESSAGES OF CHAT WITH ID
    getMessagesByChatId(id): Observable<Message[]> {
        return this.http.get<Message[]>(`${this.messageURL}/${id}`, this.httpOptions);

    }

    addMessage(message): Observable<Message> {
        return this.http.post<Message>(this.messageURL, message, this.httpOptions);
    }

    removeMessage (message: Message): Observable<{}> {
        this.messages = this.messages.filter(i => i !== message);
        const url = `${this.messageURL}/${message.id}`; // DELETE api/heroes/42
        return this.http.delete(url, this.httpOptions);
    }


    updateMessage(message: Message): Observable<Message> {
        const updatedMessage = this.messages.find(newMessage => newMessage.id === message.id );
        this.messages[this.messages.indexOf(updatedMessage)] = message;
        return this.http.put<Message>(this.messageURL, message, this.httpOptions);
    }
}
