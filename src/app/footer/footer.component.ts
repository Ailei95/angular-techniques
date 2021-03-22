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
