import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { NativeMobileModule } from '../native-mobile/native-mobile.module';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/counter.reducer';


@NgModule({
  declarations: [NgrxHomeComponent],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    NativeMobileModule,
    StoreModule.forFeature('count', counterReducer)
  ]
})
export class NgrxModule { }
