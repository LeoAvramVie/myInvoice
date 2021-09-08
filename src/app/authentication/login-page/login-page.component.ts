import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  loginGoogle(){
    this.authService.googleLogin();
  }
}
