import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state > 0 ? state - 1 : 0),
  on(reset, (state) => 0)
);

export function counterReducer(state, action): number {
  return _counterReducer(state, action);
}
