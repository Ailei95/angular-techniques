import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {Post} from '../../models/post';
import {map} from 'rxjs/operators';
import {Album} from '../../models/album';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit, AfterViewInit {

  posts$: Observable<Post[]>;
  length$: Observable<number>;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService
  ) {
  }

  ngOnInit(): void {
    this.length$ = this.jsonPlaceholderApiService.getPosts()
      .pipe(map((albums: Album[]) => albums.length));
  }

  ngAfterViewInit(): void {
    this.posts$ = this.jsonPlaceholderApiService.getPosts()
      .pipe(map((posts: Post[]) => posts.slice(0, 10)));
  }

  onPageChange(event): void {
    this.posts$ = this.jsonPlaceholderApiService.getPosts()
      .pipe(map((posts: Post[]) => {
        this.length$ = of(posts.length);
        return posts.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize);
      }));
  }
}
