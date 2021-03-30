import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormRoutingModule} from './reactive-form-routing.module';
import {ReactiveFormComponent} from './reactive-form.component';
import {MaterialModule} from '../shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PendingChangesGuard} from '../shared/pending-changes-guard/pending-changes-guard';


@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PendingChangesGuard]
})
export class ReactiveFormModule {
}
