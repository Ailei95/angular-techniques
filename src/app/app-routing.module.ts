import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckPoint, CustomPreloadingStrategy} from './shared/preloading-strategy/custom-preloading-strategy';

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
    data: {preload: true, delay: 2000, checkPoint: CheckPoint.Database}
  },
  {
    path: 'proxy',
    loadChildren: () => import('./proxy/proxy.module').then(m => m.ProxyModule),
    data: {preload: true, delay: 2000, checkPoint: CheckPoint.Proxy}
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule),
    data: {preload: true, delay: 2000}
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
