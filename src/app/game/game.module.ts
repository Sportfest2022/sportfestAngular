import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { Type1formComponent } from './type1form/type1form.component';
import { Type2formComponent } from './type2form/type2form.component';
import { TypenotfoundComponent } from './typenotfound/typenotfound.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    GameComponent,
    Type1formComponent,
    Type2formComponent,
    TypenotfoundComponent
  ],
    exports: [
        GameComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class GameModule { }
