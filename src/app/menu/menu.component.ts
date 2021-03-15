import { Component, OnInit } from '@angular/core';
import { faPrescription, faMicrochip, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface UrlIcon {
  icon: IconDefinition;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  icons: UrlIcon[] = [];

  constructor() {

    this.icons.push({
      icon: faPrescription,
      url: '/ngrx'
    });

    this.icons.push({
      icon: faMicrochip,
      url: '/gpu'
    });

    this.icons.push({
      icon: faDatabase,
      url: '/database'
    });
  }

  ngOnInit(): void {
  }

}
