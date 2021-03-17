import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../../models/user';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent implements OnInit, AfterViewInit {

  users$: Observable<User[]>;
  length$: Observable<number>;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService
  ) {
  }

  ngOnInit(): void {
    this.length$ = this.jsonPlaceholderApiService.getUsers()
      .pipe(map((users: User[]) => users.length));
  }

  ngAfterViewInit(): void {
    this.users$ = this.jsonPlaceholderApiService.getUsers()
      .pipe(map((users: User[]) => users.slice(0, 10)));
  }

  onPageChange(event): void {
    this.users$ = this.jsonPlaceholderApiService.getUsers()
      .pipe(map((users: User[]) => {
        this.length$ = of(users.length);
        return users.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize);
      }));
  }
}
