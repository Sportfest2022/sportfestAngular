import { Component, OnInit } from '@angular/core';
import {SportfestService} from "../../service/sportfest/sportfest.service";
import {Router} from "@angular/router";
import {Observable, interval} from 'rxjs';
@Component({
  selector: 'app-waiting',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {

  nextMatchTime : string = "Loading...";
  btnClass: string = "nextmatch";

  constructor(private router : Router, private sportfestService: SportfestService) {
    sportfestService.getNextMatchTimeFormat(sportfestService.getUserNick()).subscribe(value => {
      this.nextMatchTime = value;
    });
    this.sportfestService.isBelow5Min(this.sportfestService.getUserNick()).subscribe(
      value => {
        if (value) this.activateButton();
      }
    )


    const updateTask = interval(5*1000)
      .subscribe(() => {
        sportfestService.getNextMatchTimeFormat(sportfestService.getUserNick()).subscribe(value => {
          this.nextMatchTime = value;
        });
        this.sportfestService.isBelow5Min(this.sportfestService.getUserNick()).subscribe(
          value => {
            if (value) this.activateButton();
          }
        )
      });
  }


  redirect() {
    console.log("Bonk")
    this.sportfestService.isBelow5Min(this.sportfestService.getUserNick()).subscribe(value => {
      if (value) {
        let userGameType = this.sportfestService.getUserGameType();
        console.log(userGameType)
        this.router.navigate(["/type" + userGameType])
      } else {
        this.router.navigate(["/waiting"])
      }
    })

  }

  public activateButton() : void {
    this.btnClass = "nextmatch-cooler"
  }
}
