import { Component, OnInit } from '@angular/core';
import {UserItem} from '../../user-item';
import {UserItemsService} from '../../user-items.service';

@Component({
  selector: 'app-lent-out',
  templateUrl: './lent-out.component.html',
  styleUrls: ['./lent-out.component.css']
})
export class LentOutComponent implements OnInit {
    userItems: UserItem;
  constructor(private userItemsService: UserItemsService) { }

  ngOnInit() {
      this.getUserItems();
  }
    getUserItems(): void {
        this.userItemsService.getUserItems().subscribe(
            (res: UserItem) => {
                this.userItems = res;
            }
        );
    }

}
