import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {ChatService} from '../../chat.service';
import {MyErrorStateMatcher2} from '../new-entry-form/new-entry-form.component';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
import {MessageService} from '../../message.service';
import {HandlerService} from '../../handler.service';

@Component({
  selector: 'app-messages-reply',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  topicFormControl = new FormControl('', Validators.required);
  messageFormControl = new FormControl('', Validators.required);
      matcher = new MyErrorStateMatcher2();
  username: string;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private chatService: ChatService, private userService: UserService, private messageService: MessageService, private snackBar: MatSnackBar, private handler: HandlerService) { }

  ngOnInit() {
    console.log(this.data.user_id);
    this.username = this.handler.getUsername(this.data.user_id);
  }

  onSubmit() {
    const timestamp = new Date().getTime();
    this.chatService.addChat({sender_id: this.userService.user.id, receiver_id: this.data.user_id, topic: this.topicFormControl.value}).subscribe(chat => {
        this.messageService.addMessage({chat_id: chat.id, message: this.messageFormControl.value, sender_id: this.userService.user.id, send_timestamp: timestamp}).subscribe(message => {
          this.snackBar.open('Message successfully send!');
          setTimeout(() => {
            this.snackBar.dismiss();
          }, 5000);
        });
    });
  }



}
