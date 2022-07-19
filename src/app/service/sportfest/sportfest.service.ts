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

  // TODO: Service IP
  url: string = "http://localhost:8080/api/v1/sportfest/"

  @Output() userUpdate = new EventEmitter();
  @Output() loginFailed = new EventEmitter();

  constructor(private http: HttpClient) {
  }


  getAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.url + "classes/all");
  }

  login(username: string, password: string, router: Router) {

    const getLoginUrl = this.url + 'login/' + username + '/' + password;

    this.userUpdate.emit(true);
    this.http.get<User>(getLoginUrl).subscribe(value => {
      if (!value.existing) {
        console.log("Input fields should be cleared")
        this.loginFailed.emit();
        return
      }
      localStorage.setItem('currentUser', JSON.stringify(value));
      if (value.admin) router.navigate(["unemployed"])
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

  public saveType1Result(username: String, matchId: number, winningTeam: String): Observable<boolean> {
    return this.get(this.url, "match/result/type1/" + username + "/" + matchId + "/" + winningTeam);
  }

  public saveType2Result(username: String, matchId: number, winningTeam: String, team1Time : String, team2Time : String): Observable<boolean> {
    return this.get(this.url, "match/result/type2/" + username + "/" + matchId + "/" + winningTeam + "/" + team1Time + "/" + team2Time);
  }


  public isBelow5Min(username: String): Observable<boolean> {
    return this.get(this.url, "match/below5Min/" + username);
  }

  public getMatches(username: String): Observable<Match[]> {
    return this.get(this.url, "match/" + username)
  }

  public getAll(): Observable<Match[]> {
    return this.get(this.url, "match/all");
  }

  public getNextMatchTimeFormat(username: String): Observable<string> {
    return this.http.get(this.url + "match/nextmatchtime/" + username, {responseType: "text"});
  }

  public getUserFirstName(): String {
    let localJSON = localStorage.getItem('currentUser');
    if (localJSON == null) {
      return "";
    }
    return JSON.parse(localJSON).vorname;
  }


  public getUserNick(): String {
    let localJSON = localStorage.getItem('currentUser');
    if (localJSON == null) {
      return "";
    }
    return JSON.parse(localJSON).name;
  }


  public getUserGameType(): String {
    let localJSON = localStorage.getItem('currentUser');
    if (localJSON == null) {
      return "";
    }
    return JSON.parse(localJSON).gameType;
  }
}
