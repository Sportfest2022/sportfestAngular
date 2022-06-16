import {Component, OnInit} from '@angular/core';
import {Gametype} from "./models/gametype.model";
import {Match} from "./models/match.model";
import {Class} from "./models/class.model";
import {SportfestService} from "./services/sportfest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  lat = 49.5989309;
  lng = 6.5723304;

  constructor(
    private sportfestService: SportfestService
  ) { }

  public demoMatchType1 : Match = new Match(0 , new Class("1A"), new Class("1B"),"Völkerball", Gametype.TYPE1)
  public demoMatchType2 : Match = new Match(1 , new Class("2A"),  new Class("2B"),"Sprint", Gametype.TYPE2)

  ngOnInit(): void {
  }
}
