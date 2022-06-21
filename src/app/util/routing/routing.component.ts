import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../../login/login.component";
import {AuthguardService} from "../../services/authguard.service";
import {Type1formComponent} from "../../game/type1form/type1form.component";
import {DefaultComponent} from "../default/default.component";
import {Type2formComponent} from "../../game/type2form/type2form.component";

const routes: Routes = [
  { path: 'type1', component: Type2formComponent, canActivate: [AuthguardService]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: DefaultComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
