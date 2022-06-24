import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { Type1formComponent } from './type1form/type1form.component';
import { Type2formComponent } from './type2form/type2form.component';
import { TypenotfoundComponent } from './typenotfound/typenotfound.component';
import {RouterModule} from "@angular/router";
import { Type3formComponent } from './type3form/type3form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GameComponent,
    Type1formComponent,
    Type2formComponent,
    TypenotfoundComponent,
    Type3formComponent
  ],
    exports: [
        GameComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class GameModule { }
