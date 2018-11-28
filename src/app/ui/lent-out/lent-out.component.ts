import { Component, OnInit } from '@angular/core';
import {UserItem} from '../../user-item';
import {UserItemsService} from '../../user-items.service';
import {AuthenticationService} from '../../authentication.service';
import {UIDetailsComponent} from '../u-idetails/u-idetails.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-lent-out',
  templateUrl: './lent-out.component.html',
  styleUrls: ['./lent-out.component.css']
})
export class LentOutComponent implements OnInit {
    userItems: UserItem[];
    userItem: UserItem;
  constructor(private userItemsService: UserItemsService, private auth: AuthenticationService, private dialog: MatDialog) { }

  ngOnInit() {
      //this.getUserItems(localStorage.getItem('userID'));
      this.getMockUserItems();
  }
    /*getUserItems(id): void {
        this.userItemsService.getUserItems(id).subscribe(
            (res: UserItem) => {
                this.userItems = res;
            }
        );
    } */

    changeCursor(value: boolean) {
        if(value){
            document.body.style.cursor = 'pointer';
        }else if(!value){
            document.body.style.cursor = 'default';
        }
    }
    getMockUserItems(): void {
      this.userItemsService.getUserItemsMock().subscribe(userItems => this.userItems = userItems);
    }

    getMockUserItem(id): void {
      this.userItemsService.getUserItemMock(id).subscribe(userItem => this.userItem = userItem);
    }

    details(id: number): void {
        this.getMockUserItem(id);
      this.dialog.open(UIDetailsComponent, {data: {ITEM_ID: this.userItem.ITEM_ID, ITEM_NAME: this.userItem.ITEM_NAME,
      ITEM_DESC: this.userItem.ITEM_DESC, OWNER: this.userItem.OWNER, BORROWER: this.userItem.BORROWER, DATE_FROM: this.userItem.DATE_FROM,
      DATE_TO: this.userItem.DATE_TO,
          }
      }) ;


    }
}
