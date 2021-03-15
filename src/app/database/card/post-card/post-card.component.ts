import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';

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
    private jsonPlacehoderApiService: JsonPlaceholderApiService
  ) { }

  ngOnInit(): void {
    this.user$ = this.jsonPlacehoderApiService.getUserById(this.post.userId);
  }

}
