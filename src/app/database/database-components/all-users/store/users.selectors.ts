import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from './users.reducer';

export const getUsersState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(
  getUsersState,
  (state: UsersState) => state.users
);

export const getUsersLength = createSelector(
  getUsersState,
  (state: UsersState) => state.users.length
);
