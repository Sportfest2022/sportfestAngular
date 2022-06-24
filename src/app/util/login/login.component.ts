import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SportfestService} from "../../service/sportfest/sportfest.service";
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

  public username: string = "";
  public password: string = "";

  @Output() userUpdate = new EventEmitter();

  ngOnInit(): void {
    this.loggedIn = (localStorage.getItem('currentUser') != null)
  }

  login(): void {
    this.userUpdate.emit();
    this.loginService.login(this.username, this.password, this.router, this.onFail)
  }

  testLogin() {
    this.userUpdate.emit();
    this.loginService.login("test", "test", this.router, this.onFail)
  }

  onFail(router : Router) {
    console.log("Login failed")
  }

  logout(): void {
    this.userUpdate.emit();
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  onKeyName(event: KeyboardEvent) {
    this.username = (event.target as HTMLInputElement).value;
  }

  onKeyPassword(event: KeyboardEvent) {
    this.password = (event.target as HTMLInputElement).value;
  }
}
