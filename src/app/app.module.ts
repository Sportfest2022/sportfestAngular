import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GameModule} from "./game/game.module";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
