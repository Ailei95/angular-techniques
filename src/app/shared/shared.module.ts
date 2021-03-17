import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';

@NgModule({
  declarations: [
    InfinityScrollComponent
  ],
  exports: [
    InfinityScrollComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
