import {createReducer, on} from '@ngrx/store';
import * as UsersActions from './users.actions';
import {User} from '../../../models/user';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: []
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.fetchUsersSuccess, (state, action) => ({users: action.payload})),
  on(UsersActions.fetchUsersFailed, () => ({users: []}))
);
