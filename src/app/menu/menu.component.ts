import { Component, OnInit } from '@angular/core';
import { faHome, faPrescription } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faHome = faHome;
  faPrescription = faPrescription;

  constructor() {

  }

  ngOnInit(): void {
  }

}
