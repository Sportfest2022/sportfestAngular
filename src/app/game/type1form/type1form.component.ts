import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../model/match.model";
import {Class} from "../../model/class.model";
import {Gametype} from "../../model/gametype.model";
import {SportfestService} from "../../service/sportfest.service";
import {Router} from "@angular/router";


@Component({
  selector: 'sportfest22-type1form',
  templateUrl: './type1form.component.html',
  styleUrls: ['./type1form.component.css']
})
export class Type1formComponent implements OnInit {

  @Input() match: Match = new Match(-1, new Class("Placholder"), new Class("Placeholder"), "DemoSpiel", Gametype.UNDEFINED);

  public btnVisible: boolean = true;

  constructor(private testService: SportfestService, private router : Router) {
  }

  ngOnInit() {
  }

  public main(): void {
    setTimeout(() => this.btnVisible = false, 300); // 2500 is millisecond
    this.router.navigate(["/success"]);
  }
}
