import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sortfest22-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() gameType: string = "";

  public type1active: boolean = false;
  public type2active: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.gameType == "gametype-1") {
      this.type1active = true;
    } else if (this.gameType == "gametype-2") {
      this.type2active = true;
    }
  }

}
