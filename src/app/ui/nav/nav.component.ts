import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthenticationService} from '../../authentication.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    username = '';

    LogoImageUrl = '/assets/images/Logo_KeepThings.svg';

  constructor(private userService: UserService, private auth: AuthenticationService) { }

  ngOnInit() {

  }

    setUsername(username) {
      this.username = username;
      console.log(username);
    }

}
