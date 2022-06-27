import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  loginInvalid = false;

  constructor(
    private router: Router,
    private loginservice: LoginService,

  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  checkLogin() {
    console.log(this.username?.value);
    this.loginservice
      .login(this.username?.value, this.password?.value)
      .subscribe(
        (data:any) => {
          this.loginInvalid = false;
          this.router.navigate(['navbar']);
        },
        (error:Error) => {
          this.loginInvalid = true;
        }
      );
  }
}
