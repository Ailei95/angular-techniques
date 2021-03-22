import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackTopComponent implements OnInit {

  showScroll: boolean;
  showScrollHeight = 300;
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
    this.ngZone.runOutsideAngular(() => {
      const smooth = () => {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smooth);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      };

      smooth();
    });
  }
}
