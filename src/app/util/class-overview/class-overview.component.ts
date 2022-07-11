import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../../service/class/class.service";
import {Match} from "../../model/match.model";
import {resourceChangeTicket} from "@angular/compiler-cli/src/ngtsc/core";

@Component({
  selector: 'app-class-overview',
  templateUrl: './class-overview.component.html',
  styleUrls: ['./class-overview.component.css']
})
export class ClassOverviewComponent implements OnInit {

  public className: string | null = "ERROR";
  public matches ?: Match[];

  constructor(private router: Router, private route: ActivatedRoute, private classService: ClassService) {
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe((params) => {
          this.className = params.get("class");
          if (this.className == null || this.className == "") {
            this.router.navigate(["/error"]);
          }
          // @ts-ignore
          this.classService.getAllMatches(this.className).subscribe(value => {
            this.matches = value;
            console.log(this.matches)
          })
        }
      );
  }

  getEnemy(match: Match) {
    if (match.klasse1.name == this.className) return match.klasse2.name;
    else return match.klasse1.name
  }
}
