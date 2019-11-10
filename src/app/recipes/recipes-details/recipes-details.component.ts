import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private myRecipeService: RecipeService) { }

  ngOnInit() {
  }

  toShoppingList() {
    this.myRecipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
