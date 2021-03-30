import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DatabaseRoutingModule} from './database-routing.module';
import {MaterialModule} from '../shared/material/material.module';

import {DashboardComponent} from './database-components/dashboard/dashboard.component';
import {DatabaseComponent} from './database.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JsonPlaceholderApiInterceptorService} from './database-services/json-placeholder-api-interceptor.service';

@NgModule({
  declarations: [
    DashboardComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DatabaseRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonPlaceholderApiInterceptorService,
      multi: true
    }
  ]
})
export class DatabaseModule {
}
