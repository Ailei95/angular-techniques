import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProxyRoutingModule } from './proxy-routing.module';
import { ProxyComponent } from './proxy.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from '../shared/material/material.module';
import {FormsModule} from '@angular/forms';
import {NativeMobileModule} from '../shared/native-mobile/native-mobile.module';

@NgModule({
  declarations: [
    ProxyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProxyRoutingModule,
    MaterialModule,
    FormsModule,
    NativeMobileModule
  ]
})
export class ProxyModule { }
