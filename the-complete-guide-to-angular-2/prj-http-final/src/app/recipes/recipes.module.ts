import { NgModule } from "@angular/core";
import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeListComponent } from "app/recipes/recipe-list/recipe-list.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "app/recipes/recipe-list/recipe-item/recipe-item.component";
import { DropdownDirective } from "app/shared/dropdown.directive";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class RecipesModule {

}