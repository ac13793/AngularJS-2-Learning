import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "app/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ShoppingEditComponent,
        ShoppingListComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule{}