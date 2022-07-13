import {Class} from "./class.model";


export class Match {
  id: number;
  klasse1: Class;
  klasse2: Class;
  duration   : number;
  _public : boolean;
  start : Date;
  status : string;
  betreuer: string;
  gamename: string;
  stationname: string;

  constructor(id : number, klasse1 : Class, klasse2 : Class, duration : number, _public : boolean, start : Date, status : string, betreuer : string, gamename : string, stationname: string) {
    this.id = id;
    this.klasse1 = klasse1;
    this.klasse2 = klasse2;
    this.duration = duration;
    this._public = _public;
    this.start = start;
    this.status = status;
    this.betreuer = betreuer;
    this.gamename = gamename;
    this.stationname = stationname;
  }
}
