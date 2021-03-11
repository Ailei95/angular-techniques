import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';


@NgModule({
  declarations: [NgrxHomeComponent],
  imports: [
    CommonModule,
    NgrxRoutingModule
  ]
})
export class NgrxModule { }
