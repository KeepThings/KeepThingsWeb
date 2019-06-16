import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {Message} from '../../message';
import {MessageService} from '../../message.service';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Chat} from '../../chat';
import {ChatService} from '../../chat.service';
import {AuthenticationService} from '../../authentication.service';
import {Usernameid} from '../../usernameid';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private userService: UserService, private messagesService: MessageService, private chatService: ChatService, private auth: AuthenticationService) { }

  messages: Message[];
  message: Message;
  chats: Chat[];
  replyFormControl = new FormControl('', [
    Validators.required,
  ]);
  currentChatId = null;
  usernames: Usernameid[];
  matcher = new MyErrorStateMatcher2();


  ngOnInit() {
    this.getUsernames();
    this.getChats();
    this.startInterval();

  }

  startInterval() {
    setInterval(() => {
      this.getChats();
    }, 100);
  }


  getChats() {
    this.chatService.getChatByUserId(this.userService.user.id).subscribe(chats => this.chats = chats);
  }

  getMessages(id) {
    this.currentChatId = id;
    this.messagesService.getMessagesByChatId(id).subscribe(messages => this.messages = messages);

    // this.messages = this.messages.filter(i => i.sender_id === this.userService.user.id && i.receiver_id === this.userService.user.id);
  }

  getUsernames() {
    this.userService.getListOfUsernames().subscribe(res => {
      this.usernames = res;
      console.log(this.usernames);
    });
  }

  getUserName(id) {
      console.log("agefragte id: "+id);
      const temp = this.usernames.find(user => user.id = id);
      console.log(temp);
      return temp;
  }


  onSubmit(form) {
    this.messagesService.addMessage({chat_id: this.currentChatId, message: this.replyFormControl.value, sender_id: this.userService.user.id, sent_timestamp: new Date().getTime()}).subscribe(res => this.messages.push(res));
    this.replyFormControl.reset('');
    form.resetForm();
  }


}
export class MyErrorStateMatcher2 implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}
