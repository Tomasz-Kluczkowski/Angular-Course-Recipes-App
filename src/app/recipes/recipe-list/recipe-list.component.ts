import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'Superb first recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg'
    ),
    new Recipe(
      'Second recipe',
      'Superb second recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg'
    )
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(event) {
    this.recipeSelected.emit(event);
  }

}
