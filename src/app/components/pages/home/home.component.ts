import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../../header/header.component";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    HeaderComponent,
    NgIf,
    RouterOutlet,
    NgOptimizedImage,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedOut: boolean=true;

  logout(): void {
    localStorage.removeItem('auth token');
    alert('Logged out successfully!');
  }
}
