import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../models/match.model";
import {Class} from "../../models/class.model";
import {Gametype} from "../../models/gametype.model";

@Component({
  selector: 'sportfest22-type2form',
  templateUrl: './type2form.component.html',
  styleUrls: ['./type2form.component.css']
})
export class Type2formComponent implements OnInit {

  @Input() match : Match = new Match(-1, new Class("Placholder"), new Class("Placeholder"), "DemoSpiel", Gametype.UNDEFINED);

  public btnVisible : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public main() : void {
    setTimeout(() => this.btnVisible = false,300); // 2500 is millisecond
  }

}
