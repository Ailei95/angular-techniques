import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {UsersState} from './store/users.reducer';
import {getUsers, getUsersLength} from './store/users.selectors';
import {fetchUsers} from './store/users.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent implements OnInit {

  users$: Observable<User[]>;
  length$: Observable<number>;

  constructor(
    private jsonPlaceholderApiService: JsonPlaceholderApiService,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ users: UsersState }>
  ) {
    this.length$ = this.store.pipe(select(getUsersLength));
    this.users$ = this.store.pipe(select(getUsers)).pipe(map((users: User[]) => users.slice(0, 10)));
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.store.dispatch(fetchUsers({ payload: queryParams }));
      });
  }

  onPageChange(event): void {
    this.users$ = this.store.pipe(select(getUsers))
      .pipe(map((users: User[]) =>
        users.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize)
      ));
  }
}
