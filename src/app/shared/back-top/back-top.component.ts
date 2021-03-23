import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackTopComponent implements OnInit, OnDestroy {

  showScroll: boolean;
  showScrollHeight = 400;
  hideScrollHeight = 150;

  callback: () => void;

  constructor(
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.callback = () => {
        if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
          this.showScroll = true;
          this.changeDetectorRef.detectChanges();
        } else if (
          this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
          < this.hideScrollHeight) {
          this.showScroll = false;
          this.changeDetectorRef.detectChanges();
        }
      }, false);
    });
  }

  scrollTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.callback, false);
  }
}
