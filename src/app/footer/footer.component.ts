import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  scrollTop(): void {
    this.ngZone.runOutsideAngular(() => {
      let onePercentSuccession = 19;

      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - onePercentSuccession);

          onePercentSuccession *= 1.01;
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 13);
    });
  }
}
