import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'Superb first recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Tomato', 3)]
    ),
    new Recipe(
      'Second recipe',
      'Superb second recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg',
      [new Ingredient('Chilli', 4), new Ingredient('Chorizo', 2)]
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
