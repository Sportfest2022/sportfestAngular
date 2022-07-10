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
export class Type1formComponent implements OnInit {

  @Input() match : Match = new Match(1, new Class("Placholder"), new Class("Placeholder"), 10, false, new Date(Date.now()), "TBD", "gj");

  public btnVisible: boolean = true;
  public selectedOption: String = "";

  constructor(private sportfestService: SportfestService, private router : Router) {
    this.selectedOption = this.match.klasse1.name;
  }

  ngOnInit() {
  }

  public sendResult(winningTeamName : String): void {
    this.hideBtn();
    console.log(winningTeamName)
    this.sportfestService.saveType1Result(this.sportfestService.getUserNick(), this.match.id, winningTeamName).subscribe(value => {
        if (value) {
          this.router.navigate(["/success"])
        }
    })
  }


  public hideBtn() {
    this.btnVisible = false;
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedOption = event.target.value;
    console.log(this.selectedOption)
  }
}
