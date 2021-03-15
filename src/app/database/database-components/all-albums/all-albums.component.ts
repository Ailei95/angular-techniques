import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {Album} from '../../models/album';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit, AfterViewInit {

  albums$: Observable<Album[]>;
  length$: Observable<number>;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService
  ) {
  }

  ngOnInit(): void {
    this.length$ = this.jsonPlaceholderApiService.getAlbums()
      .pipe(map((albums: Album[]) => albums.length));
  }

  ngAfterViewInit(): void {
    this.albums$ = this.jsonPlaceholderApiService.getAlbums()
      .pipe(map((albums: Album[]) => albums.slice(0, 10)));
  }

  onPageChange(event): void {
    this.albums$ = this.jsonPlaceholderApiService.getAlbums()
      .pipe(map((albums: Album[]) => {
          this.length$ = of(albums.length);
          return albums.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize);
        }));
  }
}
