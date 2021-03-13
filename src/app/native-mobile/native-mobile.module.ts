import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeMobileButtonDirective } from './native-mobile-button.directive';


@NgModule({
  declarations: [NativeMobileButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [NativeMobileButtonDirective]
})
export class NativeMobileModule { }
