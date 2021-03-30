import {createAction, props} from '@ngrx/store';
import {User} from '../../../models/user';
import {Params} from '@angular/router';


export const fetchUsers = createAction('[AllUsers Component] Fetch Users', props<{ payload: Params }>());

export const fetchUsersSuccess = createAction('[Database API] Fetch Users Success', props<{ payload: User[] }>());

export const fetchUsersFailed = createAction('[Database API] Fetch Users Failed');
