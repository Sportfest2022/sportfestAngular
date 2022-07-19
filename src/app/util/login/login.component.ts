import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SportfestService} from "../../service/sportfest/sportfest.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: SportfestService,
              public router: Router,
              private toastr: ToastrService,
              private sportfestService: SportfestService) {
    sportfestService.loginFailed.subscribe(value => {
      this.onFail(router);
    });
  }

  public loggedIn = false;

  public username: string = "";
  public password: string = "";

  @Output() userUpdate = new EventEmitter();

  ngOnInit(): void {
    this.loggedIn = (localStorage.getItem('currentUser') != null)
  }

  login(): void {
    this.loginService.login(this.username, this.password, this.router)
    this.userUpdate.emit();
    this.username = "";
    this.password = "";
  }

  onFail(router : Router) {
    this.toastr.error('Logindaten überprüfen', 'Login fehlgeschlagen');
    this.username = "";
    this.password = "";
  }

  logout(): void {
    this.userUpdate.emit();
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }
}
