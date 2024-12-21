import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  email : string = "baha@baha.baha"
  password: string = "baha@baha.baha"
  token:string ="";
  isLoggedIn:boolean=true;

  private authURL = environment.authURL;


  handleLogin(email:string, password:string) {
    this.http.post<{token:string}>(`${this.authURL}/api/v1/auth/authenticate`, {
      email: email,
      password: password
    }).subscribe(
      response => {
        console.log(response);
        console.log(response.token)
        this.token=response.token
        localStorage.setItem('token', this.token);

      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
  getIsLoggedIn(){
    return this.isLoggedIn;
  }
}
