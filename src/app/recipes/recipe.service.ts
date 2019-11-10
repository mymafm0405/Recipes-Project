import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          'A test recipe',
          'Description Test',
          'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/nachos_92445_16x9.jpg',
          [
            new Ingredient('Meat', 5),
            new Ingredient('Sause', 10)
          ]
        ),
        new Recipe(
          'A test recipe',
          'Description Test',
          'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/nachos_92445_16x9.jpg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Fries', 30)
          ]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private myShoppingService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(newIngredients: Ingredient[]) {
      this.myShoppingService.addIngredientsToShopping(newIngredients);
    }
}
