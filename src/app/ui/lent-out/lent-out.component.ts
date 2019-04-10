import { Component, OnInit } from '@angular/core';
import {UserItem} from '../../user-item';
import {UserItemsService} from '../../user-items.service';
import {AuthenticationService} from '../../authentication.service';
import {UIDetailsComponent} from '../u-idetails/u-idetails.component';
import {MatDialog} from '@angular/material';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-lent-out',
  templateUrl: './lent-out.component.html',
  styleUrls: ['./lent-out.component.css']
})
export class LentOutComponent implements OnInit {
    userItems: UserItem[];
    userItem: UserItem;
    sub: Subscription;
  constructor(private userItemsService: UserItemsService, private dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
      this.getUserItems();

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
        this.userItems = this.userItems.filter(i => i.USER_ID === this.userService.user.USER_ID);
    }

    details(id: number): void {
        this.dialog.open(UIDetailsComponent, {data: {ITEM_ID: id
            }
        }) ;

    }

    removeItem(userItem: UserItem) {
        this.userItems = this.userItems.filter(i => i !== userItem);
        this.userItemsService.removeUserItem(userItem).subscribe();
    }
}
