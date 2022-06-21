import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GameModule} from "./game/game.module";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./util/routing/routing.component";
import {AuthguardService} from "./services/authguard.service";
import { DefaultComponent } from './util/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent
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
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
