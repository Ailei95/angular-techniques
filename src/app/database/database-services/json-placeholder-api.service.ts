import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

import {User} from '../models/user';
import {Todo} from '../models/todo';
import {Album} from '../models/album';
import {Photo} from '../models/photo';
import {Post} from '../models/post';

import {DatabaseModule} from '../database.module';
import {Params} from '@angular/router';

@Injectable({
  providedIn: DatabaseModule
})
export class JsonPlaceholderApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(queryParams: Params = null): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users' + this.appendParams(queryParams))
      .pipe(shareReplay({bufferSize: 2, refCount: true}));
  }

  getAlbums(queryParams: Params = null): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums' + this.appendParams(queryParams))
      .pipe(shareReplay({bufferSize: 2, refCount: true}));
  }

  getPhotos(queryParams: Params = null): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos' + this.appendParams(queryParams))
      .pipe(shareReplay({bufferSize: 2, refCount: true}));
  }

  getPosts(queryParams: Params = null): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts' + this.appendParams(queryParams))
      .pipe(shareReplay({bufferSize: 2, refCount: true}));
  }

  getComments(queryParams: Params = null): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments' + this.appendParams(queryParams))
      .pipe(shareReplay({bufferSize: 2, refCount: true}));
  }

  getTodos(queryParams: Params = null): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos' + this.appendParams(queryParams))
      .pipe(shareReplay({bufferSize: 2, refCount: true}));
  }

  private appendParams(params: Params): string {
    let queryParams = '';

    // tslint:disable-next-line:forin
    for (const key in params) {
      queryParams += '&' + key + '=' + params[key];
    }
    return queryParams.replace('&', '?');
  }
}
