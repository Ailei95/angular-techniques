import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appNativeMobileButton]'
})
export class NativeMobileButtonDirective {

  @Output() shortPress = new EventEmitter();

  constructor() { }

  @HostBinding('style.touch-action') touchAction = 'manipulation';
  @HostBinding('style.user-select') userSelect = 'none';

  @HostListener('click', ['$event']) touchstart(): void {
    this.shortPress.emit();
  }

}
