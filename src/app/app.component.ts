import { Component } from '@angular/core';
import {TestService} from './test.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  title = 'KeepThings';
  obj;
  constructor(private test: TestService, private http: HttpClient) {
      this.test.getData().subscribe(data => this.obj = data);
  }

}
