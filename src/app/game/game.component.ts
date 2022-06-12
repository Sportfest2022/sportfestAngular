import {Component, Input, OnInit} from '@angular/core';
import {Gametype} from "../models/gametype.model";

@Component({
  selector: 'sortfest22-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() gameType?: Gametype = undefined;

  public type1active: boolean = false;
  public type2active: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.gameType == Gametype.TYPE1) {
      this.type1active = true;
      this.type2active = false;
    } else if (this.gameType == Gametype.TYPE2) {
      this.type1active = false;
      this.type2active = true;
    }
  }

}
