import {Injectable, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class HandlerService implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsername(id) {
    return this.getUsernameByID(id);
  }

  getUsernameByID(id) {
    if (this.users) {
      return this.users.find(x => x.id === id).username;
    } else {
      return '';
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => this.users = res);
  }
}
