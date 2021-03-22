import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';
import { BackTopComponent } from './back-top/back-top.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    InfinityScrollComponent,
    BackTopComponent
  ],
  exports: [
    InfinityScrollComponent,
    BackTopComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
