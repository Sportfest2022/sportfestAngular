import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Class} from "../../model/class.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {catchError} from "rxjs/operators";
import {Match} from "../../model/match.model";

@Injectable({
  providedIn: 'root'
})
export class SportfestService {

  url: string = "http://localhost:8080/api/v1/sportfest/"

  @Output() userUpdate = new EventEmitter();

  constructor(private http: HttpClient) {
  }


  getAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.url + "classes/all");
  }

  login(username: string, password: string, router: Router, onFail: Function) {

    const getLoginUrl = this.url + 'login/' + username + '/' + password;

    this.userUpdate.emit(true);
    this.http.get<User>(getLoginUrl).subscribe(value => {
      if (!value.existing) {
        onFail.call([])
        return
      }
      localStorage.setItem('currentUser', JSON.stringify(value));
      router.navigate(["type" + this.getUserGameType()]);
    });
  }


  logout(router: Router): void {
    this.userUpdate.emit(false);
    localStorage.removeItem('currentUser');
    router.navigate([""]);
  }

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(url: string, path: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.get(url + path, {params, headers: headers})
      .pipe(catchError(SportfestService.formatErrors));
  }


  public getUserData(username: String, password: String): Observable<User> {
    return this.get(this.url, "/login/" + username + "/" + password);
  }

  public getMatches(username: String): Observable<Match[]> {
    return this.get(this.url, "/match/" + username)
  }

  public getUserFirstName(): String {
    let localJSON = localStorage.getItem('currentUser');
    if (localJSON == null) {
      return "";
    }
    return JSON.parse(localJSON).vorname;
  }


  public getUserGameType(): String {
    let localJSON = localStorage.getItem('currentUser');
    if (localJSON == null) {
      return "";
    }
    return JSON.parse(localJSON).gameType;
  }
}
