import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GpuRoutingModule} from './gpu-routing.module';
import {GpuHomeComponent} from './gpu-home/gpu-home.component';
import {NativeMobileModule} from '../shared/native-mobile/native-mobile.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {matrixReducer} from './store/matrix.reducer';
import {MaterialModule} from '../shared/material/material.module';


@NgModule({
  declarations: [
    GpuHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GpuRoutingModule,
    NativeMobileModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('matrix', matrixReducer)
  ]
})
export class GpuModule {
}
