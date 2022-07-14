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
    this.sportfestService.getAll().subscribe(value => {
      this.matches = value;
    })
  }

  convert(start: Date) : string {
    let s = String(start); // Pattern: 2022-07-20T11:00:00Z

    s = s.replace("-", ".");
    s = s.replace("-", ".");
    s = s.replace("T", " ");
    s = s.replace("Z", " ");

    s = s.replace("2022.07.20", "");
    s = s.replace(":00", "");

    return s;
  }
}
