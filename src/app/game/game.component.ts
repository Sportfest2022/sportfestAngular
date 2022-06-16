import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../models/match.model";
import {Gametype} from "../models/gametype.model";
import {Class} from "../models/class.model";

@Component({
  selector: 'sportfest22-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() match : Match = new Match(-1, new Class("Placholder"), new Class("Placeholder"), "DemoSpiel", Gametype.UNDEFINED);

  public type1active: boolean = false;
  public type2active: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (typeof this.match == 'undefined') {
      return
    }

    if (this.match.gameType == Gametype.TYPE1) {
      this.type1active = true;
      this.type2active = false;
    } else if (this.match.gameType == Gametype.TYPE2) {
      this.type1active = false;
      this.type2active = true;
    }
  }

}
