import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserItem} from '../../user-item';
import {MarketplaceItems} from '../../marketplace-items';
import {TestService} from '../../test.service';
import {UserService} from '../../user.service';
import {UserItemsService} from '../../user-items.service';
import {MarketplaceService} from '../../marketplace.service';
import {NewEntryFormComponent} from '../new-entry-form/new-entry-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    title = 'KeepThings';
    user: User;
    error = '';
    success = '';
    constructor(private userService: UserService, ) {}

    ngOnInit() {

        this.getUser();
    }
    getUser(): void {
        this.userService.getUserById().subscribe(
            (res: User) => {
                this.user = res;
            }
        );
    }
}
