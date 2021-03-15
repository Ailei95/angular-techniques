import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllAlbumsComponent } from './all-albums.component';

const routes: Routes = [  {
  path: '',
  component: AllAlbumsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllAlbumsRoutingModule { }
