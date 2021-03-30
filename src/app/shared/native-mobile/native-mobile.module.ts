import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NativeMobileButtonDirective} from './native-mobile-button.directive';
import {NativeMobileButtonLongPressDirective} from './native-mobile-button-long-press.directive';


@NgModule({
  declarations: [NativeMobileButtonDirective, NativeMobileButtonLongPressDirective],
  imports: [
    CommonModule
  ],
  exports: [NativeMobileButtonDirective, NativeMobileButtonLongPressDirective]
})
export class NativeMobileModule {
}
