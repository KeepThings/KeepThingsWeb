import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthenticationService} from '../../authentication.service';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    title = 'KeepThings';
    user: User;
    constructor(private userService: UserService, private auth: AuthenticationService ) {}

    ngOnInit() {
            this.getUser();


    }

    getUser(): void {
        this.userService.getUserById(this.auth.userProfile.sub).subscribe(res => this.user = res.body);
    }
}
