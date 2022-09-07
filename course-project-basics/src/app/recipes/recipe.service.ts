import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private ingredients: Ingredient[] =
    this.shoppingListService.getIngredientsFromService();
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Honey Mustard Chicken',
      'Asian Food',
      'https://s23209.pcdn.co/wp-content/uploads/2019/03/Honey-Mustard-Chicken-SaladIMG_8674-500x750.jpg',
      [
        new Ingredient('Honey', 1),
        new Ingredient('Mustard', 2),
        new Ingredient('Chicken', 5),
      ]
    ),
    new Recipe(
      'Sheet Pan Shrimp Fajitas',
      'Asian Food',
      'https://s23209.pcdn.co/wp-content/uploads/2022/02/211015_DAMN-DELICIOUS_Shrimp-Fajitas_051-480x720.jpg',
      [new Ingredient('Shrimp', 10), new Ingredient('Fajitas', 2)]
    ),
  ];

  getRecipesFromService(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  getIngredients() {
    return [...this.ingredients];
  }
}
