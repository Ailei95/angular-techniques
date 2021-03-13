import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpuHomeComponent } from './gpu-home/gpu-home.component';

const routes: Routes = [  {
  path: '',
  component: GpuHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpuRoutingModule { }
