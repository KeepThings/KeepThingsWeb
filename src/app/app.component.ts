import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
interface DataD {
    object: String;
}
export class AppComponent {
    constructor( private http: HttpClient) { }
    title = 'KeepThings';
    obj;
    fetchData() {
        this.obj = this.http.get<DataD>('http://localhost:1234/api/file.json');
        this.http.get<DataD>('http://localhost:1234/api/file.json').subscribe(res =>{this.obj = res});

    }


}
