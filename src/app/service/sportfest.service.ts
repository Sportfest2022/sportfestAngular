import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Class} from "../model/class.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SportfestService {

  constructor(private http: HttpClient) {
  }


  getAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>("http://192.168.167.29:8080/api/v1/sportfest/classes/all");
  }
}
