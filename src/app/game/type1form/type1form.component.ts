import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../model/match.model";
import {Class} from "../../model/class.model";
import {Gametype} from "../../model/gametype.model";
import {SportfestService} from "../../service/sportfest/sportfest.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'sportfest22-type1form',
  templateUrl: './type1form.component.html',
  styleUrls: ['./type1form.component.css']
})
export class Type1formComponent {

  public match : Match = new Match(
    1,
    new Class("Loading..."),
    new Class("Loading.."),
    10,
    false,
    new Date(Date.now()),
    "Loading..",
    "Loading...",
    "Loading...");

  public btnVisible: boolean = true;
  public selectedOption: String = "";

  constructor(private sportfestService: SportfestService, private router : Router) {
    sportfestService.getMatches(this.sportfestService.getUserNick()).subscribe(value => {
      value.forEach(value1 => {
        this.match = value1;
        this.selectedOption = this.match.klasse1.name;
      })
    });
  }

  public sendResult(winningTeamName : String): void {
    this.btnVisible = false;
    console.log(winningTeamName)
    this.sportfestService.saveType1Result(this.sportfestService.getUserNick(), this.match.id, winningTeamName).subscribe(value => {
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
