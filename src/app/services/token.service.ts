import {Injectable} from '@angular/core';
import {jwtDecode} from "jwt-decode";
import {Token} from "../model/Token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKEN_KEY = 'token';

  constructor() {}

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }


  getDecodedToken(): Token | null {
    const token = this.getToken();
    if (!token) return {
      id:  0,
      fullName:  'GUEST',
      email:  '',
      authorities:  []
    };

    try {
      const decodedToken: any = jwtDecode(token);
      return {
        id: decodedToken.id,
        fullName: decodedToken.fullName,
        email: decodedToken.email,
        authorities: decodedToken.authorities
      };
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }
}
