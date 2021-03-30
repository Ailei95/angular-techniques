import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {faDatabase, faFile, faMicrochip, faNetworkWired, faPrescription} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

interface UrlIcon {
  icon: IconDefinition;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

    this.icons.push({
      icon: faNetworkWired,
      url: '/proxy'
    });

    this.icons.push({
      icon: faFile,
      url: '/reactive-form'
    });
  }

  ngOnInit(): void {
  }
}
