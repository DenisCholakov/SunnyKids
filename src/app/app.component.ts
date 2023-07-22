import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showText(element: HTMLElement) {
    element.style.opacity = '1';
  }

  hideText(element: HTMLElement) {
    element.style.opacity = '0';
  }

  navigateToParties() {}
}
