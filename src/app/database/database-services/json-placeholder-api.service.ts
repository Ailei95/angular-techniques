import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {User} from '../models/user';
import {Todo} from '../models/todo';
import {Album} from '../models/album';
import {Photo} from '../models/photo';
import {Post} from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService {

  constructor(
    private http: HttpClient
  ) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users: User[]) => users), shareReplay({ bufferSize: 100, refCount: true }));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get('https://jsonplaceholder.typicode.com/users?id=' + id)
      .pipe(map((user: User[]) => user[0]), shareReplay({ bufferSize: 100, refCount: true }));
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
      .pipe(map((albums: Album[]) => albums), shareReplay({ bufferSize: 100, refCount: true }));
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .pipe(map((photos: Photo[]) => photos), shareReplay({ bufferSize: 100, refCount: true }));
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
      .pipe(map((photos: Photo[]) => photos));
  }

  getPosts(): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((posts: Post[]) => posts), shareReplay({ bufferSize: 100, refCount: true }));
  }

  getComments(): Observable<Comment[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
      .pipe(map((comments: Comment[]) => comments), shareReplay({ bufferSize: 100, refCount: true }));
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((todos: Todo[]) => todos), shareReplay({ bufferSize: 100, refCount: true }));
  }
}
