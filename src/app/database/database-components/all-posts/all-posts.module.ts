import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostsRoutingModule } from './all-posts-routing.module';
import { AllPostsComponent } from './all-posts.component';
import {CardModule} from '../../card/card.module';
import {MaterialModule} from '../../../shared/material/material.module';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [AllPostsComponent],
  imports: [
    CommonModule,
    AllPostsRoutingModule,
    CardModule,
    MaterialModule,
    SharedModule
  ]
})
export class AllPostsModule { }
