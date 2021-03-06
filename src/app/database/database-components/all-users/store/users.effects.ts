import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

import * as UsersActions from './users.actions';
import {fetchUsersFailed, fetchUsersSuccess} from './users.actions';
import {JsonPlaceholderApiService} from '../../../database-services/json-placeholder-api.service';

import {User} from '../../../models/user';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.fetchUsers),
    mergeMap((action) => this.jsonPlaceholderApiService.getUsers(action.payload)
      .pipe(
        map((users: User[]) => fetchUsersSuccess({payload: users})),
        catchError(() => of(fetchUsersFailed()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private jsonPlaceholderApiService: JsonPlaceholderApiService
  ) {
  }
}
