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
    sub: Subscription;
  constructor(private userItemsService: UserItemsService, private dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
      this.getUser();
      this.getUserItems();

  }

  getUser() {
      this.userService.getUserById(1).subscribe(value => this.user = value);
  }
    changeCursor(value: boolean) {
        if (value) {
            document.body.style.cursor = 'pointer';
        } else if (!value) {
            document.body.style.cursor = 'default';
        }
    }
    getUserItems(): void {
        this.userItemsService.getUserItems().subscribe(userItems => this.userItems = userItems);
        // this.userItems = this.userItems.filter(i => i.id === this.userService.user.id);
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
