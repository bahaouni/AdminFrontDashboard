import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-login',
    imports: [FormsModule, HttpClientModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = ""
  password: string = "  "
  token:string = ""
  constructor(private http:HttpClient ){

  }
  handleLogin() {
    this.http.post<{ token: string }>('http://localhost:8088/api/v1/auth/authenticate', {
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        console.log(response);
        const token = response.token;  // Extract the token
        console.log('Token:', token);
        localStorage.setItem('token', token);

      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
  handleLogout(){
    localStorage.removeItem('token');
  }

}
