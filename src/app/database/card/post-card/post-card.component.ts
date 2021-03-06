import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css', '../card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;

  user$: Observable<User>;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService
  ) {
  }

  ngOnInit(): void {
    if (this.post) {
      this.user$ = this.jsonPlaceholderApiService.getUsers({id: this.post.userId})
        .pipe(map((users: User[]) => users[0]));
    }
  }

}
