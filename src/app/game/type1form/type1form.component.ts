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

  @Input() match : Match = new Match(-1, new Class("Placholder"), new Class("Placeholder"), 10, false, new Date(Date.now()), "TBD", "gj");

  public btnVisible: boolean = true;
  public selectedOption: string = "";

  constructor(private testService: SportfestService, private router : Router) {
  }

  ngOnInit() {
  }

  public sendResult(winningTeamName : string): void {
    setTimeout(() => this.sendData(winningTeamName), 300); // 2500 is millisecond
    this.router.navigate(["/success"]);
  }


  public sendData(winningTeamName : string) {
    this.btnVisible = false;
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedOption = event.target.value;
    console.log(this.selectedOption)
  }
}
