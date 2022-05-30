import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  loginInvalid=false;
  constructor( private router:Router ) {

   }

  ngOnInit(): void {
  }
  checkLogin()
  {
    this.router.navigate(['/navbar']);
  }

}
