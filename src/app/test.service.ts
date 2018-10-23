import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface Data {
    obj: Array<Object>;
}

@Injectable({
  providedIn: 'root'
})


export class TestService {
    constructor(private http: HttpClient) {}

    getData(): Observable<Data[]> {
        return this.http.get<Data[]>('/api/test.php')
            .pipe(tap(data => console.log(data)));
    }


}
