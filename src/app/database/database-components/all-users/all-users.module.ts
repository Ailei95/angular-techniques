import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllUsersRoutingModule } from './all-users-routing.module';
import { AllUsersComponent } from './all-users.component';
import { CardModule } from '../../card/card.module';
import { MaterialModule } from '../../../shared/material/material.module';
import {StoreModule} from '@ngrx/store';
import {usersReducer} from './store/users.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './store/users.effects';

@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    AllUsersRoutingModule,
    CardModule,
    MaterialModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class AllUsersModule {
}
