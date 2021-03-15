import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './database-components/dashboard/dashboard.component';
import { DatabaseComponent } from './database.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DatabaseRoutingModule
  ]
})
export class DatabaseModule { }
