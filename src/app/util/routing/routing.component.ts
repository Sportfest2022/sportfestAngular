import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {AuthguardService} from "../../service/authguard/authguard.service";
import {Type1formComponent} from "../../game/type1form/type1form.component";
import {DefaultComponent} from "../default/default.component";
import {Type2formComponent} from "../../game/type2form/type2form.component";
import {SuccessComponent} from "../success/success.component";
import {WaitingComponent} from "../waiting/waiting.component";
import {AdminComponent} from "../admin/admin.component";
import {ClassOverviewComponent} from "../class-overview/class-overview.component";
import {DoneComponent} from "../done/done.component";
import {UnemployedComponent} from "../unemployed/unemployed.component";

const routes: Routes = [
  { path: 'type1', component: Type1formComponent, canActivate: [AuthguardService]},
  { path: 'type2', component: Type2formComponent, canActivate: [AuthguardService]},
  { path: 'login', component: LoginComponent},
  { path: 'success', component: SuccessComponent, canActivate: [AuthguardService]},
  { path: 'waiting', component: WaitingComponent, canActivate: [AuthguardService]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthguardService]},
  { path: 'class/:class', component: ClassOverviewComponent},
  { path: 'done', component: DoneComponent},
  { path: 'unemployed', component: UnemployedComponent},
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
