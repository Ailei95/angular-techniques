import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appNativeMobileButtonLongPress]'
})
export class NativeMobileButtonLongPressDirective {

  stopAction: boolean;

  intervalHandler: any;
  timeoutHandler: any;

  @Input() longPressTimeout = 600;
  @Input() longPressInterval = 100;

  @Output() longPress = new EventEmitter();
  @Output() longPressEnded = new EventEmitter();

  @Output() shortPress = new EventEmitter();

  constructor() {
  }

  @HostBinding('style.touch-action') touchAction = 'manipulation';
  @HostBinding('style.user-select') userSelect = 'none';

  @HostListener('touchstart', ['$event']) touchstart(): void {
    this._mousedown();
  }

  @HostListener('touchend', ['$event']) touchend(): void {
    this._mouseup();
  }

  @HostListener('mousedown', ['$event']) mousedown(): void {
    this._mousedown();
  }

  @HostListener('mouseup', ['$event']) mouseup(): void {
    this._mouseup(true);
  }

  @HostListener('mouseleave', ['$event']) mouseleave(): void {
    this._mouseup();
  }

  private _mousedown(): void {
    this.stopAction = false;

    this.timeoutHandler = setTimeout(() => {
      this.intervalHandler = setInterval(() => {
        this.longPress.emit();
      }, this.longPressInterval);

      this.stopAction = true;
      this.timeoutHandler = null;
    }, this.longPressTimeout);
  }

  private _mouseup(emit: boolean = false): void {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }

    if (this.intervalHandler) {
      this.longPressEnded.emit();

      clearInterval(this.intervalHandler);
      this.intervalHandler = null;
    } else {
      if (emit) {
        this.shortPress.emit();
      }
    }
  }
}
