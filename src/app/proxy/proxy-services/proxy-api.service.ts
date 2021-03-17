import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getHello(): Observable<JSON> {
    return this.httpClient.get('/api/hello')
      .pipe(map((hello: JSON) => hello ));
  }
}
