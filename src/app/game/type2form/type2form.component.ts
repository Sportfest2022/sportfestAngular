import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../model/match.model";
import {Class} from "../../model/class.model";
import {Gametype} from "../../model/gametype.model";
import {SportfestService} from "../../service/sportfest/sportfest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sportfest22-type2form',
  templateUrl: './type2form.component.html',
  styleUrls: ['./type2form.component.css']
})
export class Type2formComponent {
  public match : Match = new Match(
    1,
    new Class("Loading..."),
    new Class("Loading.."),
    10,
    false,
    new Date(Date.now()),
    "Loading..",
    "Loading...",
    "Loading...",
    "Loading...");

  public btnVisible: boolean = true;
  public selectedOption: String = "";

  constructor(private sportfestService: SportfestService, private router : Router) {
    sportfestService.getMatches(this.sportfestService.getUserNick()).subscribe(value => {
      for (let value1 of value) {
        value1.start.setHours(3);
      }
      for (let value1 of value) {
        console.log(value1.id)
        this.match = value1;
        this.selectedOption = this.match.klasse1.name;
        break;
      }
    });
  }

  public sendResult(winningTeamName : String, team1Time : String, team2Time : String): void {
    this.btnVisible = false;
    console.log(winningTeamName)
    this.sportfestService.saveType2Result(this.sportfestService.getUserNick(), this.match.id, winningTeamName, team1Time, team2Time).subscribe(value => {
      if (value) {
        this.router.navigate(["/success"])
      }
    })
  }

  selectChangeHandler (event: any) {
    this.selectedOption = event.target.value;
    console.log(this.selectedOption)
  }
}
