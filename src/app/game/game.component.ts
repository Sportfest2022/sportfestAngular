import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sportfest22-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() gameType?: string = undefined;

  public type1active: boolean = false;
  public type2active: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.gameType == "TYPE1") {
      this.type1active = true;
      this.type2active = false;
    } else if (this.gameType == "TYPE2") {
      this.type1active = false;
      this.type2active = true;
    }
  }

}
