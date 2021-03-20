import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
    loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule)
  },
  {
    path: 'proxy',
    loadChildren: () => import('./proxy/proxy.module').then(m => m.ProxyModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
