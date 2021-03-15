import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './all-posts-routing.module';
import { AllPostsComponent } from './all-posts.component';
import {CardModule} from '../../card/card.module';
import {MaterialModule} from '../../../material/material.module';


@NgModule({
  declarations: [AllPostsComponent],
  imports: [
    CommonModule,
    AllPostsRoutingModule,
    CardModule,
    MaterialModule
  ]
})
export class AllPostsModule { }
