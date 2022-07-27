import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}

  onCreateNewRecipe() {
    //this.recipes.push(new Recipe());
  }
}
