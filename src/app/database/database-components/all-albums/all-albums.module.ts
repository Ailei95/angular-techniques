import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllAlbumsRoutingModule } from './all-albums-routing.module';
import { AllAlbumsComponent } from './all-albums.component';
import { CardModule } from '../../card/card.module';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [AllAlbumsComponent],
  imports: [
    CommonModule,
    AllAlbumsRoutingModule,
    CardModule,
    MaterialModule
  ]
})
export class AllAlbumsModule { }
