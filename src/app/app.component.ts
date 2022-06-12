import {Component} from '@angular/core';
import {Gametype} from "./models/gametype.model";
import {concatMap, interval, startWith, Subject, switchMap} from "rxjs";
import {GameComponent} from "./game/game.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public GameType = Gametype;
  public gameTypes = Object.values(this.GameType);

  public types = Object.keys(this.GameType).filter((item) => {
    return isNaN(Number(item));
  });

  public currentType: Gametype = Gametype.TYPE1;

  public toggleType(): void {
    if (this.currentType == Gametype.TYPE1) {
      this.currentType = Gametype.TYPE2;
    } else {
      this.currentType = Gametype.TYPE1;
    }
  }

  public test() {
  }
}
