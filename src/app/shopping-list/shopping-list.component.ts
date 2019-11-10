import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private myShoppingService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.myShoppingService.getIngredients();
    this.myShoppingService.ingredientChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }

  onButtonClicked(eventData) {
    this.ingredients.push(eventData);
  }

}
