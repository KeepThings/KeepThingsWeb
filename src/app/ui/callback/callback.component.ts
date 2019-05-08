import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-callback',
  template: `
    <p>
      Loading...
    </p>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.handleLoginCallback();
  }

}
