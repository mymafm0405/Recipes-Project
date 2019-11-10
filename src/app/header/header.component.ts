import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() recipesClicked = new EventEmitter();
    @Output() shoppingClicked = new EventEmitter();
    onRecipesClick() {
        this.recipesClicked.emit({
            link: 'recipes'
        });
    }
    onShoppingClick() {
        this.shoppingClicked.emit({
            link: 'shopping'
        });
    }
}
