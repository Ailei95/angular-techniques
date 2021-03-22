import {Injectable, NgModule} from '@angular/core';
import {ActivatedRoute, NavigationEnd, PreloadingStrategy, Route, Router, RouterModule, Routes} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';

export enum CheckPoint {
  Database = 'DATABASE',
  Proxy = 'PROXY'
}

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  checkpoints: Set<CheckPoint> = new Set<CheckPoint>();

  constructor(router: Router, route: ActivatedRoute){
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => route),
      map((_route) => {
        while (_route.firstChild) { _route = _route.firstChild; }
        return _route;
      }),
      filter(_route => _route.outlet === 'primary'))
      .subscribe((_route) => {
        if (!(_route.snapshot.data.checkPoint == null)){
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

const routes: Routes = [
  {
    path: 'ngrx',
    loadChildren: () => import('./ngrx/ngrx.module').then(m => m.NgrxModule)
  },
  {
    path: 'gpu',
    loadChildren: () => import('./gpu/gpu.module').then(m => m.GpuModule)
  },
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule),
    data: { preload: true, delay: 2000, checkPoint: CheckPoint.Database }
  },
  {
    path: 'proxy',
    loadChildren: () => import('./proxy/proxy.module').then(m => m.ProxyModule),
    data: { preload: true, delay: 2000, checkPoint: CheckPoint.Proxy }
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
