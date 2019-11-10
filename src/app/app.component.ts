import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showComponent = '';
  onRecipesClicked(eventData) {
    this.showComponent = eventData.link;
  }
  onShoppingClicked(eventData) {
    this.showComponent = eventData.link;
  }
}
