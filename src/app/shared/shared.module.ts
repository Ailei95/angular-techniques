import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';
import { BackTopComponent } from './back-top/back-top.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    InfinityScrollComponent,
    BackTopComponent,
    ProgressBarComponent
  ],
  exports: [
    InfinityScrollComponent,
    BackTopComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
