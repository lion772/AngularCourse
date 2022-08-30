import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Honey Mustard Chicken',
      'Asian Food',
      'https://s23209.pcdn.co/wp-content/uploads/2019/03/Honey-Mustard-Chicken-SaladIMG_8674-500x750.jpg'
    ),
    new Recipe(
      'Sheet Pan Shrimp Fajitas',
      'Asian Food',
      'https://s23209.pcdn.co/wp-content/uploads/2022/02/211015_DAMN-DELICIOUS_Shrimp-Fajitas_051-480x720.jpg'
    ),
  ];

  getRecipesFromService(): Recipe[] {
    return [...this.recipes];
  }

  setRecipeFromService(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  loggingRecipe(recipe: Recipe) {
    console.log(recipe);
  }
}
