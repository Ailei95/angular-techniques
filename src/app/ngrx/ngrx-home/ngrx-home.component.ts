import {Component, HostListener, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ActionCreator, Store } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

@Component({
  selector: 'app-ngrx-home',
  templateUrl: './ngrx-home.component.html',
  styleUrls: ['./ngrx-home.component.css']
})
export class NgrxHomeComponent implements OnInit {

  count$: Observable<number>;
  actions: { increment?: ActionCreator, decrement?: ActionCreator, reset?: ActionCreator };

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.actions = { increment, decrement };
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
