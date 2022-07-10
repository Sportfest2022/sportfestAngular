import {Component, OnInit} from '@angular/core';
import {Match} from "./model/match.model";
import {Class} from "./model/class.model";
import {Gametype} from "./model/gametype.model";
import {concatMap, interval, startWith, Subject, switchMap} from "rxjs";
import {GameComponent} from "./game/game.component";
import {SportfestService} from "./service/sportfest/sportfest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  lat = 49.5989309;
  lng = 6.5723304;

  constructor(
    private sportfestService: SportfestService,
    private router : Router
  ) {
    sportfestService.userUpdate.subscribe(value => {
      this.loggedIn = value;
    });
  }

  public loggedIn : boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn = true;
    }
  }

  public logout() {
    this.sportfestService.logout(this.router);
  }
}
