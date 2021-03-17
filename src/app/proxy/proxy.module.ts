import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProxyRoutingModule } from './proxy-routing.module';
import { ProxyComponent } from './proxy.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProxyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProxyRoutingModule
  ]
})
export class ProxyModule { }
