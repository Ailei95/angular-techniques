import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  today: Date;

  userAgent: string;
  os: string;

  constructor(
    // private ngZone: NgZone
  ) {
    this.today = new Date();
    this.os = window.navigator.platform;
    this.userAgent = window.navigator.userAgent;
  }

  ngOnInit(): void {
  }

//   scrollTop(): void {
// /*
//         this.ngZone.runOutsideAngular(() => {
//           const smooth = () => {
//             const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//             if (currentScroll > 0) {
//               window.requestAnimationFrame(smooth);
//               window.scrollTo(0, currentScroll - (currentScroll / 5));
//             }
//           };
//
//           smooth();
//         });
// */
//     window.scroll({top: 0, left: 0, behavior: 'smooth'});
//   }
}
