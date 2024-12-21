import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../../services/auth.service";  // Import Router

@Component({
    selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = ""
  password: string = ""
  token:string = ""

  constructor(private router: Router, private authService: AuthService){}
  handleLogin() {
    this.authService.handleLogin(this.email, this.password)
  }
  handleLogout(){
    localStorage.removeItem('token');
  }

}
