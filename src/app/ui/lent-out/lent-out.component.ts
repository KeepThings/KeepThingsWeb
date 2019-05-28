import { Component, OnInit } from '@angular/core';
import {UserItem} from '../../user-item';
import {UserItemsService} from '../../user-items.service';
import {AuthenticationService} from '../../authentication.service';
import {UIDetailsComponent} from '../u-idetails/u-idetails.component';
import {MatDialog} from '@angular/material';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../../user.service';
import {User} from '../../user';

@Component({
  selector: 'app-lent-out',
  templateUrl: './lent-out.component.html',
  styleUrls: ['./lent-out.component.css']
})
export class LentOutComponent implements OnInit {
    user: User;
    userItems: UserItem[];
    userItem: UserItem;
  constructor(private userItemsService: UserItemsService, private dialog: MatDialog, private userService: UserService, private auth: AuthenticationService) { }

  ngOnInit() {
      this.getUser();
      this.startInterval();

  }
    startInterval() {
        setInterval(() => {
            this.getUserItems();
        }, 1000);
    }

  getUser() {
      this.userService.getUserById(this.auth.userProfile.sub).subscribe(value => this.user = value);
  }

    getUserItems(): void {
        this.userItemsService.getUserItems().subscribe(userItems => this.userItems = userItems);
    }

    details(id: number): void {
        this.dialog.open(UIDetailsComponent, {data: {id: id
            }
        }) ;

    }

    removeItem(userItem: UserItem) {
        this.userItems = this.userItems.filter(i => i !== userItem);
        this.userItemsService.removeUserItem(userItem).subscribe();
    }
}
