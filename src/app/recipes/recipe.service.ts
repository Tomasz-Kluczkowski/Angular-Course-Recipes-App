import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      0,
      'First recipe',
      'Superb first recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Tomato', 3)]
    ),
    new Recipe(
      1,
      'Second recipe',
      'Superb second recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg',
      [new Ingredient('Chilli', 4), new Ingredient('Chorizo', 2)]
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeForId(id: number): Recipe {
    return this.recipes.find(
      (recipe) => recipe.id === id
    );
  }
}
