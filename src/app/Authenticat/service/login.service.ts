import { Injectable } from '@angular/core';
import { Admin } from 'src/app/admin/model/admin';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,) {}

  login(username: string, password: string) {
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
})
    return this.httpClient
      .get<Admin>('http://localhost:4040/Admin/find/' + username, {
        headers,
      })
      .pipe(
        map((userData) => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('name', userData.nom);

          sessionStorage.setItem('currentAdminId', userData.id.toString());

          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('currentAdminId');
    sessionStorage.removeItem('basicauth');
  }


}
