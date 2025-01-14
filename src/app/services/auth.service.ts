import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {UserDTO} from '../model/User';
import {jwtDecode} from "jwt-decode";
import {TokenService} from "./token.service";
import {Token} from "../model/Token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email : string = ""
  password: string = ""

  private authURL = environment.authURL;

  constructor(private http:HttpClient, private tokenService: TokenService) { }

  handleLogin(email:string, password:string) {
    this.http.post<{ token: string }>(`${this.authURL}/api/v1/auth/authenticate`, {
      email: email,
      password: password
    }).subscribe(
      response => {
        const token = response.token;
        this.tokenService.setToken(token);
        console.log('Token stored:', token);

        const decodedToken: any = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  logout(): void {
    this.tokenService.clearToken();
    console.log('User logged out, token cleared.');
  }

  public isAuthorized(allowedRoles: string[]): boolean {
    const token: Token | null = this.tokenService.getDecodedToken();
    if (!token) return false;

    return token.authorities.some(role => allowedRoles.includes(role));  }

}
