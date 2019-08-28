import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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
  getRecipes() {
    return this.recipes.slice();
  }
}
