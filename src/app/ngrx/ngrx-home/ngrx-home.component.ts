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

  stopAction: boolean;

  intervalHandler: any;
  timeoutHandler: any;

  @HostListener('touchstart', ['$event']) touchstart($event: TouchEvent): void {
    switch (($event.target as HTMLElement).id) {
      case 'increment':
        this.mousedown(increment);
        break;
      case 'decrement':
        this.mousedown(decrement);
        break;
    }
  }

  @HostListener('touchend', ['$event']) touchend(): void {
    this.mouseup();
  }

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.actions = { increment, decrement };
  }

  increment(): void {
    if (!this.stopAction) {
      this.store.dispatch(increment());
    }
  }

  decrement(): void {
    if (!this.stopAction) {
      this.store.dispatch(decrement());
    }
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  mousedown(action): void {
    this.stopAction = false;

    this.timeoutHandler = setTimeout(() => {
      this.intervalHandler = setInterval(() => {
        this.store.dispatch(action());
      }, 100);

      this.stopAction = true;
      this.timeoutHandler = null;
    }, 600);
  }

  mouseup(): void {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }

    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
      this.intervalHandler = null;
    }
  }
}
