import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeMenu = 1;
  onClickMenu(index: number) {
    this.activeMenu = index;
  }
}
