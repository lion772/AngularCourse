import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'course-project-basics';
  showRecipe: boolean = true;
  showShoppingList: boolean = false;
  toggle = false;
  value: number = 10;

  displaySectionHandler(eventEmitter) {
    if (eventEmitter.isRecipes) {
      this.showRecipe = true;
      this.showShoppingList = false;
    } else {
      this.showRecipe = false;
      this.showShoppingList = true;
    }
  }
}
