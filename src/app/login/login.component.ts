import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SportfestService} from "../service/sportfest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: SportfestService, public router: Router) {
  }

  public loggedIn = false;

  @Output() userUpdate = new EventEmitter();

  ngOnInit(): void {
    this.loggedIn = (localStorage.getItem('currentUser') != null)
    if (this.loggedIn) {

    }
  }

  login(): void {
    this.userUpdate.emit();
    this.loginService.login("test", "test", this.router)
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

}
