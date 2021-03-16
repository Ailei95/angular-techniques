import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {Post} from '../../models/post';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit, OnDestroy {

  @ViewChild('end') end: ElementRef;

  posts$: Observable<Post[]>;

  postLength: number;
  postsToShow: number;

  callback: () => void;

  constructor(
    private ngZone: NgZone,
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

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.callback = () => {
        if ((window.innerHeight + window.scrollY) >= this.end.nativeElement.offsetTop) {
          if (this.postsToShow < this.postLength) {
            this.ngZone.run(() => {
              this.postsToShow = Math.min(this.postsToShow + 10, this.postLength);
            });
          }
        }
      }, false);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.callback, false);
  }
}
