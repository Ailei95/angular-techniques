import {Component} from '@angular/core';
import {forkJoin, interval, Observable, of, Subject} from 'rxjs';
import {delay, map, mergeMap, switchMap, take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const obs1 = new Observable((subscriber) => {
      setInterval(() => {
        subscriber.next(10);
      }, 5000);
    });

    const obs2 = new Observable((subscriber) => {
      setInterval(() => {
        subscriber.next(20);
      }, 2000);
    });

    const obs3 = new Observable((subscriber) => {
      setTimeout(() => {
        console.log('t');
        subscriber.next(30);
      }, 3000);
    });

    // obs1.pipe(take(5), switchMap((x) => obs2.pipe(map(x2 => 'switch' + x + x2)))).subscribe(console.log);

    // obs1.pipe(take(5), mergeMap((x) => obs2.pipe(map(x2 => 'merge' + x + x2)))).subscribe(console.log);

    // of(obs1, obs2, obs3).pipe(
    //   switchMap(x => x),
    //   map((x) => 'switch' + x)
    // ).subscribe(console.log);
    //
    // of(obs1, obs2, obs3).pipe(
    //   mergeMap(x => x),
    //   map((x) => 'merge' + x)
    // ).subscribe(console.log);

    const asyncCall = new Subject();
    forkJoin([interval(1000).pipe(takeUntil(asyncCall)), of(1), of(2)]).subscribe(console.log);

    setTimeout(() => { asyncCall.next(1); }, 10000);

    of('ciao pippo').pipe(delay(5000)).subscribe(console.log);
  }

  change(): void {
    // console.log('change');
  }
}
