import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../store/counter.actions';

@Component({
  selector: 'app-ngrx-home',
  templateUrl: './ngrx-home.component.html',
  styleUrls: ['./ngrx-home.component.css']
})
export class NgrxHomeComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
