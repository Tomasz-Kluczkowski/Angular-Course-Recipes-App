import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  @Output() menuClicked = new EventEmitter<{ recipesVisible: boolean, shoppingListVisible: boolean }>();

  onRecipesClicked() {
    this.menuClicked.emit({recipesVisible: true, shoppingListVisible: false});
  }

  onShoppingListClicked() {
    this.menuClicked.emit({recipesVisible: false, shoppingListVisible: true});
  }
}
