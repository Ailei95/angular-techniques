import {Component, ElementRef, Input, NgZone, OnInit, Output, ViewChild, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.css']
})
export class InfinityScrollComponent implements OnInit, OnDestroy {

  @Input() stopEmit = true;
  @Output() bottomReached = new EventEmitter();

  @ViewChild('end') end: ElementRef;

  callback: () => void;

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.callback = () => {
        if ((window.innerHeight + window.scrollY) >= this.end.nativeElement.offsetTop) {
          if (!this.stopEmit) {
            this.ngZone.run(() => {
              this.bottomReached.emit();
            });
          }
        }
      }, false);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.callback, false);
  }
}
