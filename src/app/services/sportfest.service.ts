import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SportfestService {

  constructor(
    private http: HttpClient
  ) { }

  /*public getCity(id: number): Observable<City> {
    return this.http.get<City>("http://localhost:8080/api/v1/survival/city/" + id);
  }*/
}
