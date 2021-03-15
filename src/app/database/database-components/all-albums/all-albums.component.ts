import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {Album} from '../../models/album';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit {

  @ViewChild('end') end: ElementRef;

  albums$: Observable<Album[]>;

  albumsLength: number;
  albumsToShow: number;

  constructor(
    private ngZone: NgZone,
    private jsonPlaceholderApiService: JsonPlaceholderApiService
  ) {
    this.albumsLength = 10;
    this.albumsToShow = 10;
  }

  ngOnInit(): void {
    this.albums$ = this.jsonPlaceholderApiService.getAlbums()
      .pipe(map((albums: Album[]) => {
        this.albumsLength = albums.length;
        return albums;
      }));

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', (e) => {
        if ((window.innerHeight + window.scrollY) >= this.end.nativeElement.offsetTop) {
          if (this.albumsToShow < this.albumsLength) {
            this.ngZone.run(() => {
              this.albumsToShow = Math.min(this.albumsToShow + 10, this.albumsLength);
            });
          }
        }
      });
    });
  }
}
