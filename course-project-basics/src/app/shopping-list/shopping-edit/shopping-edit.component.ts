import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() eventIngredientEmitter = new EventEmitter<Ingredient>();
  newIngredient: Ingredient;

  constructor() {}

  ngOnInit(): void {}

  onAddInput(inputValue): void {
    //You can get hold of input value by using directly the local reference (nameInput.value) as argument
    // in the function, or you may use @ViewChild and ElementRef.
    //console.log(inputValue);

    this.newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.eventIngredientEmitter.emit(this.newIngredient);
  }

  onDeleteInput(): void {}

  onClearInput(): void {}
}
