import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { NativeMobileModule } from '../native-mobile/native-mobile.module';


@NgModule({
  declarations: [NgrxHomeComponent],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    NativeMobileModule
  ]
})
export class NgrxModule { }
