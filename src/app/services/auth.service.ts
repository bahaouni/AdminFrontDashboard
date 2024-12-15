import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode } from 'jwt-decode';
import { HttpClientModule } from '@angular/common/http'; // Import this module

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  email : string = "baha@baha.baha"
  password: string = "baha@baha.baha"
  token:string ="";
  isLoggedIn:boolean=true;


  handleLogin() {
    this.http.post<{token:string}>('http://localhost:8091/api/v1/auth/authenticate', {
      email: this.email,
      password: this.password
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
