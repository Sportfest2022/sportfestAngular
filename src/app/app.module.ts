import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GameModule} from "./game/game.module";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './util/login/login.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./util/routing/routing.component";
import {AuthguardService} from "./service/authguard/authguard.service";
import { DefaultComponent } from './util/default/default.component';
import { SuccessComponent } from './util/success/success.component';
import { WaitingComponent } from './util/waiting/waiting.component';
import { AdminComponent } from './util/admin/admin.component';
import { ClassOverviewComponent } from './util/class-overview/class-overview.component';
import { DoneComponent } from './util/done/done.component';
import { UnemployedComponent } from './util/unemployed/unemployed.component';
import { LoginSuccessComponent } from './util/login-success/login-success.component';
import {ToastrModule} from "ngx-toastr";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    SuccessComponent,
    WaitingComponent,
    AdminComponent,
    ClassOverviewComponent,
    DoneComponent,
    UnemployedComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GameModule,
    BrowserModule,
    HttpClientModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCX4V6zODLwes4vzNRtgn_0XZCcfl4nYL0'
    }),*/
    FormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
