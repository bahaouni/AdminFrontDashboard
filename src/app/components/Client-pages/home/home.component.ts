import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../componnents/header/header.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FooterComponent} from "../componnents/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent
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
