import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgrxHomeComponent} from './ngrx-home/ngrx-home.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NgrxRoutingModule {
}
