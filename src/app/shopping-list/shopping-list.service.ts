import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsToShopping(newIngredientsFromRecipe: Ingredient[]) {
        this.ingredients.push(...newIngredientsFromRecipe);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}
