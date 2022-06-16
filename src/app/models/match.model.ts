import {Gametype} from "./gametype.model";
import {Class} from "./class.model";

export class Match {
  id: number;
  class1: Class;
  class2: Class;
  gameName : string;
  gameType : Gametype;

  constructor(id : number, class1 : Class, class2 : Class, gameName : string, gameType : Gametype) {
    this.id = id;
    this.class1 = class1;
    this.class2 = class2;
    this.gameName = gameName;
    this.gameType = gameType;
  }
}
