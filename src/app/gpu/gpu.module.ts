import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpuRoutingModule } from './gpu-routing.module';
import { GpuHomeComponent } from './gpu-home/gpu-home.component';
import { NativeMobileModule } from '../native-mobile/native-mobile.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export interface MatrixState {
  cpuTime: number;
  gpuTime: number;

  matrixSize: number;
  matrixA: Array<Array<number>>;
  matrixB: Array<Array<number>>;
  matrixResult: Array<Array<number>>;
}

@NgModule({
  declarations: [GpuHomeComponent],
    imports: [
        CommonModule,
        GpuRoutingModule,
        NativeMobileModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class GpuModule { }
