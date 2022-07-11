import { Component, OnInit } from '@angular/core';
import {SportfestService} from "../../service/sportfest/sportfest.service";
import {Match} from "../../model/match.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public matches ?: Match[];

  constructor(public sportfestService : SportfestService) { }


  ngOnInit(): void {
    this.sportfestService.getMatches("test").subscribe(value => {
      this.matches = value;
    })
  }

}
