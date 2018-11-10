import { Component, OnInit } from '@angular/core';
import {UserItem} from '../../user-item';
import {UserItemsService} from '../../user-items.service';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-lent-out',
  templateUrl: './lent-out.component.html',
  styleUrls: ['./lent-out.component.css']
})
export class LentOutComponent implements OnInit {
    userItems: UserItem;

  constructor(private userItemsService: UserItemsService, private auth: AuthenticationService) { }

  ngOnInit() {
      this.getUserItems(localStorage.getItem('userID'));
  }
    getUserItems(id): void {
        this.userItemsService.getUserItems(id).subscribe(
            (res: UserItem) => {
                this.userItems = res;
            }
        );
    }

}
