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
