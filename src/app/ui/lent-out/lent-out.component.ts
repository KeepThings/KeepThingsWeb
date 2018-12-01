import { Component, OnInit } from '@angular/core';
import {UserItem} from '../../user-item';
import {UserItemsService} from '../../user-items.service';
import {AuthenticationService} from '../../authentication.service';
import {UIDetailsComponent} from '../u-idetails/u-idetails.component';
import {MatDialog} from '@angular/material';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-lent-out',
  templateUrl: './lent-out.component.html',
  styleUrls: ['./lent-out.component.css']
})
export class LentOutComponent implements OnInit {
    userItems: UserItem[];
    userItem: UserItem;
    sub: Subscription;
  constructor(private userItemsService: UserItemsService, private auth: AuthenticationService, private dialog: MatDialog) { }

  ngOnInit() {
      this.getUserItems();
      this.sub = Observable.interval(1000)
          .subscribe((val) => {
              if (this.userItemsService.needUpdate()) {
                  this.getUserItems();
                  this.userItemsService.setUpdate(false);

              }
          });
  }
    changeCursor(value: boolean) {
        if (value) {
            document.body.style.cursor = 'pointer';
        } else if (!value) {
            document.body.style.cursor = 'default';
        }
    }
    getUserItems(): void {
        this.userItemsService.getUserItems(localStorage.getItem('userID')).subscribe(userItems => this.userItems = userItems);
    }

    details(id: number): void {
        this.dialog.open(UIDetailsComponent, {data: {ITEM_ID: id
            }
        }) ;

    }
}
