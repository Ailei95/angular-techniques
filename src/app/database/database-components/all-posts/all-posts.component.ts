import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {Post} from '../../models/post';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllPostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  postLength: number;
  postsToShow: number;

  trackByIndex = (index: number): number => index;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.postLength = 10;
    this.postsToShow = 10;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.posts$ = this.jsonPlaceholderApiService.getPosts(queryParams)
          .pipe(map((posts: Post[]) => {
            this.postLength = posts.length;
            return posts;
          }));
      });
  }

  bottomReached(): void {
    this.postsToShow = Math.min(this.postsToShow + 10, this.postLength);
  }
}
