import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpuRoutingModule } from './gpu-routing.module';
import { GpuHomeComponent } from './gpu-home/gpu-home.component';
import { NativeMobileModule } from '../native-mobile/native-mobile.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [GpuHomeComponent],
  imports: [
    CommonModule,
    GpuRoutingModule,
    NativeMobileModule,
    ReactiveFormsModule
  ]
})
export class GpuModule { }
