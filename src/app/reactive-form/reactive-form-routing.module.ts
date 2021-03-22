import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form.component';
import {PendingChangesGuard} from '../shared/pending-changes-guard/pending-changes-guard';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent,
    canDeactivate: [PendingChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
