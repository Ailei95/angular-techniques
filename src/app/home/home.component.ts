import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  private static MILLIS_IN_A_DAY = 86400000;
  private static MILLIS_IN_AN_HOUR = 3600000;
  private static MILLIS_IN_A_MINUTE = 60000;
  private static MILLIS_IN_A_SECOND = 1000;

  @ViewChild('daysLeft') daysLeft: ElementRef;
  @ViewChild('hoursLeft') hoursLeft: ElementRef;
  @ViewChild('minutesLeft') minutesLeft: ElementRef;
  @ViewChild('secondsLeft') secondsLeft: ElementRef;

  @ViewChild('label') label: ElementRef;

  private timer: number;
  private milestone: Date;

  private timer2: number;
  private cont: number;
  private phrase: number;
  private write: boolean;
  private labelText: string[];

  constructor(
    private ngZone: NgZone,
  ) {
    this.cont = 0;
    this.phrase = 0;
    this.write = true;
    this.labelText = ['Our site is launching soon.', 'Something big is coming.', 'Be the first to know.'];

    this.milestone = new Date(2021, 6, 1);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // tslint:disable:max-line-length
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this._printToMilestone();
      }, 1000);

      this.timer2 = setInterval(() => {
        this._printPhrases();
      }, 100);
    });
  }

  private _printToMilestone(): void {
    const toMilestone = this.milestone.getTime() - (new Date()).getTime();

    this.daysLeft.nativeElement.innerHTML = Math.floor(toMilestone / HomeComponent.MILLIS_IN_A_DAY) + ' <sup>days</sup>';
    this.hoursLeft.nativeElement.innerHTML = ('0' + Math.floor(toMilestone % HomeComponent.MILLIS_IN_A_DAY / HomeComponent.MILLIS_IN_AN_HOUR)).slice(-2) + ' <sup>hours</sup>';
    this.minutesLeft.nativeElement.innerHTML = ('0' + Math.floor(toMilestone % HomeComponent.MILLIS_IN_AN_HOUR / HomeComponent.MILLIS_IN_A_MINUTE)).slice(-2) + ' <sup>minutes</sup>';
    this.secondsLeft.nativeElement.innerHTML = ('0' + Math.floor(toMilestone % HomeComponent.MILLIS_IN_A_MINUTE / HomeComponent.MILLIS_IN_A_SECOND)).slice(-2) + ' <sup>seconds</sup>';
  }

  private _printPhrases(): void {
    this.label.nativeElement.innerText = this.labelText[this.phrase % this.labelText.length].slice(0, this.cont >= 0 ? this.cont : 0) + '|';

    if (this.write) {
      if (++this.cont >= this.labelText[this.phrase % this.labelText.length].length) {
        this.write = false;
      }
    } else {

      this.cont -= 2;

      if (this.cont <= 0) {
        ++this.phrase;
        this.write = true;
      }
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    clearInterval(this.timer2);
  }
}
