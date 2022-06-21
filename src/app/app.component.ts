import {Component, OnInit} from '@angular/core';
import {Match} from "./model/match.model";
import {Class} from "./model/class.model";
import {Gametype} from "./model/gametype.model";
import {concatMap, interval, startWith, Subject, switchMap} from "rxjs";
import {GameComponent} from "./game/game.component";
import {SportfestService} from "./service/sportfest.service";
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

  public demoMatchType1 : Match = new Match(0 , new Class("1A"), new Class("1B"),"Völkerball", Gametype.TYPE1)
  public demoMatchType2 : Match = new Match(1 , new Class("2A"),  new Class("2B"),"Sprint", Gametype.TYPE2)

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
