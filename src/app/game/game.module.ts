import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { Type1formComponent } from './type1form/type1form.component';
import { Type2formComponent } from './type2form/type2form.component';



@NgModule({
    declarations: [
        GameComponent,
        Type1formComponent,
        Type2formComponent
    ],
    exports: [
        GameComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GameModule { }
