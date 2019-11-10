import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private myRecipeService: RecipeService) { }

  ngOnInit() {
  }

  onItemClick() {
    this.myRecipeService.recipeSelected.emit(this.recipe);
  }

}
