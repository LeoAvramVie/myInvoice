import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  password: any;
  email: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(formDataSignup: { valid: any; value: { email: string; password: string; }; }){
    if (formDataSignup.valid){
      console.log(formDataSignup.value);
      this.authService.emailSignup(
        formDataSignup.value.email,
        formDataSignup.value.password
      )
    }
  }


}
