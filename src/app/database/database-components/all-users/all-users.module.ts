import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllUsersRoutingModule } from './all-users-routing.module';
import { AllUsersComponent } from './all-users.component';
import { CardModule } from '../../card/card.module';
import { MaterialModule } from '../../../shared/material/material.module';

@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    AllUsersRoutingModule,
    CardModule,
    MaterialModule
  ]
})
export class AllUsersModule {
}
