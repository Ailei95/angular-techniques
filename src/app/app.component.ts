import {AfterViewInit, Component, NgZone} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  constructor(
    private ngZone: NgZone
  ) {
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      $('.home-particles').particleground({
        dotColor: '#ffffff',
        lineColor: '#ffffff',
        particleRadius: 8,
        curveLines: true,
        density: 10000,
        proximity: 100,
      });
    });
  }
}
