import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {UserDTO} from "../../../../model/User";
import {jwtDecode} from "jwt-decode";
import {TokenService} from "../../../../services/token.service";
import {Token} from "../../../../model/Token";

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  token: Token | null = null;

  constructor(private tokenService: TokenService) {}
  ngOnInit(): void {
    this.token = this.tokenService.getDecodedToken();

    console.log(this.token);
  }
}

