import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit, OnDestroy {

  @ViewChild('matProgressBar') matProgressBar: MatProgressBar;

  percentage: number;

  callback: () => void;

  constructor(
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.callback = () => {
        this.percentage = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100;
        this.changeDetectorRef.detectChanges();
      }, false);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.callback, false);
  }
}
