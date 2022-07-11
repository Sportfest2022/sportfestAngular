import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../model/match.model";
import {Class} from "../../model/class.model";
import {Gametype} from "../../model/gametype.model";
import {SportfestService} from "../../service/sportfest/sportfest.service";

@Component({
  selector: 'sportfest22-type2form',
  templateUrl: './type2form.component.html',
  styleUrls: ['./type2form.component.css']
})
export class Type2formComponent implements OnInit {

  @Input() match : Match = new Match(-1, new Class("Placholder"), new Class("Placeholder"), 10, false, new Date(Date.now()), "TBD", "jsjo", "Spiel", "Troll");

  public btnVisible : boolean = true;

  constructor(private testService : SportfestService) { }

  ngOnInit() {
  }

  public main() : void {
    setTimeout(() => this.btnVisible = false,300); // 2500 is millisecond
  }

}
