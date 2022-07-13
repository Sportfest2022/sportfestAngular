import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Class} from "../../model/class.model";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {Match} from "../../model/match.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  url: string = "http://localhost:8080/api/v1/sportfest/class/"

  @Output() userUpdate = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getAllMatches(className : String): Observable<Match[]> {
    return this.http.get<Match[]>(this.url + "matches/" + className);
  }

  getAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.url + "all");
  }
}
