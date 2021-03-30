import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {Album} from '../../models/album';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllAlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;

  albumsLength: number;
  albumsToShow: number;

  // Not needed since albums$ doesn't change
  trackByIndex = (index: number): number => index;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.albumsLength = 10;
    this.albumsToShow = 10;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.albums$ = this.jsonPlaceholderApiService.getAlbums(queryParams)
          .pipe(map((albums: Album[]) => {
            this.albumsLength = albums.length;
            return albums;
          }));
      });
  }

  bottomReached(): void {
    this.albumsToShow = Math.min(this.albumsToShow + 10, this.albumsLength);
  }
}
