import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {User} from '../models/user';
import {Todo} from '../models/todo';
import {Album} from '../models/album';
import {Photo} from '../models/photo';
import {Post} from '../models/post';

import {DatabaseModule} from '../database.module';

@Injectable({
  providedIn: DatabaseModule
})
export class JsonPlaceholderApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(queryParams: object = null): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users' + this.appendParams(queryParams))
      .pipe(map((users: User[]) => users), shareReplay({ bufferSize: 10, refCount: true }));
  }

  getAlbums(queryParams: object = null): Observable<Album[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums' + this.appendParams(queryParams))
      .pipe(map((albums: Album[]) => albums), shareReplay({ bufferSize: 10, refCount: true }));
  }

  getPhotos(queryParams: object = null): Observable<Photo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos' + this.appendParams(queryParams))
      .pipe(map((photos: Photo[]) => photos), shareReplay({ bufferSize: 10, refCount: true }));
  }

  getPosts(queryParams: object = null): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts' + this.appendParams(queryParams))
      .pipe(map((posts: Post[]) => posts), shareReplay({ bufferSize: 10, refCount: true }));
  }

  getComments(queryParams: object = null): Observable<Comment[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments' + this.appendParams(queryParams))
      .pipe(map((comments: Comment[]) => comments), shareReplay({ bufferSize: 10, refCount: true }));
  }

  getTodos(queryParams: object = null): Observable<Todo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos' + this.appendParams(queryParams))
      .pipe(map((todos: Todo[]) => todos), shareReplay({ bufferSize: 10, refCount: true }));
  }

  private appendParams(params: object): string {
    let queryParams = '';
    // tslint:disable-next-line:forin
    for (const key in params) { queryParams += '&' + key + '=' + params[key]; }
    return queryParams.replace('&', '?');
  }
}
