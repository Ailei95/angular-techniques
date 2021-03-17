import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { NativeMobileModule } from '../shared/native-mobile/native-mobile.module';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/counter.reducer';
import {MaterialModule} from '../shared/material/material.module';


@NgModule({
  declarations: [NgrxHomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgrxRoutingModule,
    NativeMobileModule,
    StoreModule.forFeature('count', counterReducer)
  ]
})
export class NgrxModule { }
