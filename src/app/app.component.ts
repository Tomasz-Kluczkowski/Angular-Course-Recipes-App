import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RECIPES';
  showMenuElements = {recipesVisible: true, shoppingListVisible: false};

  showMenu(event) {
    console.log(event);
    this.showMenuElements = event;
  }
}
