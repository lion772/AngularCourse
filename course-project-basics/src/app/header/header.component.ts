import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  toggle: boolean = false;

  @Output() displayRecipeOrShoppingListener = new EventEmitter<{
    isShoppingList: boolean;
    isRecipes: boolean;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeClicked() {
    this.displayRecipeOrShoppingListener.emit({
      isRecipes: true,
      isShoppingList: false,
    });
  }

  onShoppingClicked() {
    this.displayRecipeOrShoppingListener.emit({
      isRecipes: false,
      isShoppingList: true,
    });
  }
}
