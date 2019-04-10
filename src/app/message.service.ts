import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserItem} from './user-item';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    messages: Message[];
    messageURL = 'localhost:5001/api/message';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
    };

  constructor(private http: HttpClient) { }


  getMessageById(id: number): Observable<Message[]> {
    return this.http.get<Message>(`${this.messageURL}/${id}`).pipe(
        map((res) => {
          this.messages = res['result'];
          return this.messages;
        }));
  }

    getMessages(): Observable<Message[]> {
        return this.http.get<Message>(`${this.messageURL}`).pipe(
            map((res) => {
                this.messages = res['result'];
                return this.messages;
            }));
    }

    addMessage(message: Message): Observable<UserItem> {
        this.messages.push(message);
        return this.http.post<UserItem>(this.messageURL, message, this.httpOptions);
    }

    removeMessage (message: Message): Observable<{}> {
        this.messages = this.messages.filter(i => i !== message);
        const url = `${this.messageURL}/${message.MESSAGE_ID}`; // DELETE api/heroes/42
        return this.http.delete(url, this.httpOptions);
    }


    updateMessage(message: Message): Observable<Message> {
        const updatedMessage = this.messages.find(newMessage => newMessage.MESSAGE_ID === message.MESSAGE_ID );
        this.messages[this.messages.indexOf(updatedMessage)] = message;
        return this.http.put<Message>(this.messageURL, message, this.httpOptions);
    }
}
