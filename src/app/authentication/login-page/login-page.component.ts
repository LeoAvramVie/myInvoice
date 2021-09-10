import {Component} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent   {

  googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

  constructor(private authService: AuthenticationService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));
  }

  loginGoogle(){
    this.authService.googleLogin();
  }
}
