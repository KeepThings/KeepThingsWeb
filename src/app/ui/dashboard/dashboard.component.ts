import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserItem} from '../../user-item';
import {TestService} from '../../test.service';
import {UserService} from '../../user.service';
import {UserItemsService} from '../../user-items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    title = 'KeepThings';
    user: User;
    userItems: UserItem;
    error = '';
    success = '';
    constructor(private test: TestService, private userService: UserService, private userItemsService: UserItemsService) {}

    ngOnInit() {

        this.getUser();
        this.getUserItems();
    }

    getUserItems(): void {
        this.userItemsService.getUserItems().subscribe(
            (res: UserItem) => {
                this.userItems = res;
            }
        );
    }
    getUser(): void {
        this.userService.getUserById().subscribe(
            (res: User) => {
                this.user = res;
            }
        );
    }
}
