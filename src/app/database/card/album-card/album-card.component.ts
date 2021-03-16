import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Album} from '../../models/album';
import {Photo} from '../../models/photo';
import {Observable} from 'rxjs';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {map} from 'rxjs/operators';
import {User} from '../../models/user';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css', '../card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumCardComponent implements OnInit {

  @Input() album: Album;

  photo$: Observable<Photo>;
  user$: Observable<User>;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService
  ) {
  }

  ngOnInit(): void {
    this.photo$ = this.jsonPlaceholderApiService.getPhotos({albumId: this.album.id})
      .pipe(map((photos: Photo[]) => photos[0]));

    this.user$ = this.jsonPlaceholderApiService.getUsers({id: this.album.userId})
      .pipe(map((users: User[]) => users[0]));
  }

}
