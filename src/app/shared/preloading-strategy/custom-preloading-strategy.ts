import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, PreloadingStrategy, Route, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable, of, timer} from 'rxjs';

export enum CheckPoint {
  Database = 'DATABASE',
  Proxy = 'PROXY'
}

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  checkpoints: Set<CheckPoint> = new Set<CheckPoint>();

  constructor(router: Router, route: ActivatedRoute) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => route),
      map((_route) => {
        while (_route.firstChild) {
          _route = _route.firstChild;
        }
        return _route;
      }),
      filter(_route => _route.outlet === 'primary'))
      .subscribe((_route) => {
        if (!(_route.snapshot.data.checkPoint == null)) {
          this.checkpoints.add(_route.snapshot.data.checkPoint);
        }
      });
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.after && this.checkpoints.has(route.data.after)) {
      return timer(route.data.delay ? route.data.delay : 0).pipe(mergeMap(() => load()));
    } else {
      if (route.data && route.data.preload && !route.data.after) {
        return timer(route.data.delay ? route.data.delay : 0).pipe(mergeMap(() => load()));
      } else {
        return of(null);
      }
    }
  }
}
