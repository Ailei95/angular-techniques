import { browser, by, element } from 'protractor';
import {ElementRef} from '@angular/core';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getMenuElements(): Promise<ElementRef> {
    return element(by.css('app-menu .social-links ul'));
  }
}
