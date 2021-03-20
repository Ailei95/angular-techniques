import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getHello(): Observable<JSON> {
    return this.httpClient.get<JSON>(environment.url + 'api/hello');
  }
}
