import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SportfestService} from "../../service/sportfest/sportfest.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public router: Router, public sportfestService : SportfestService) { }

  ngOnInit(): void {
  }

  redirect() {
    console.log("Bonk")
    this.sportfestService.isBelow5Min(this.sportfestService.getUserNick()).subscribe(value => {
      if (value) {
        this.router.navigate(["/type" + this.sportfestService.getUserGameType()])
      } else {
        this.router.navigate(["/waiting"])
      }
    })

  }
}
