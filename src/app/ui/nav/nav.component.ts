import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    user: User;
    user = new User(1, "test", "da",  "asd",  12,  "asd",  "asd",  true);
    LogoImageUrl = '/assets/images/Logo_KeepThings.svg';
  constructor(private userService: UserService) { }

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