import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Class} from "../model/class.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {catchError} from "rxjs/operators";

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

  login(username: string, password: string, router: Router): void {

    const getLoginUrl = this.url + 'login/' + username + '/' + password;

    this.userUpdate.emit(true);
    this.http.get(getLoginUrl).subscribe(value => {
      localStorage.setItem('currentUser', JSON.stringify(value));
      router.navigate(["type1"]);
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
    // var url: string = "http://wargearteam.service.myplayplanet.dev:9090";
    return this.get(this.url, "/login/" + username + "/" + password);
  }

  public getUserDataLoc(): String {
    let localJSON = localStorage.getItem('currentUser');
    if (localJSON == null) {
      return "";
    }
    return JSON.parse(localJSON).vorname;
  }
}
