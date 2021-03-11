import {AfterViewInit, Component} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  constructor() {
  }

  ngAfterViewInit(): void {
    $('.home-particles').particleground({
      dotColor: '#ffffff',
      lineColor: '#ffffff',
      particleRadius: 8,
      curveLines: true,
      density: 10000,
      proximity: 100,
    });
  }
}
