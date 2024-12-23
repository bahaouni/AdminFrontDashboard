import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import { UserDTO } from '../model/User';
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email : string = ""
  password: string = ""
  token:string ="";

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserDTO | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private authURL = environment.authURL;
  private currentUserSubject: BehaviorSubject<UserDTO | null>;
  public currentUser: Observable<UserDTO | null>;
  handleLogin(email:string, password:string) {
    this.http.post<any>(`${this.authURL}/api/v1/auth/authenticate`, {
      email: email,
      password: password
    }).subscribe(
      response => {
        console.log(response);
        console.log(response.token);
        this.token=response.token;
        const decodedToken = jwtDecode(this.token);
        console.log("decodedToken:", decodedToken);
        localStorage.setItem('token', this.token);

        const user: UserDTO = response.user;
        this.currentUserSubject.next(user);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): UserDTO | null {
    return this.currentUserSubject.value;
  }

  public isAuthorized(allowedRoles: string[]): boolean {
    const user = this.currentUserValue;
    if (!user) return false;
    return user.roles.some(role => allowedRoles.includes(role));
  }

}
