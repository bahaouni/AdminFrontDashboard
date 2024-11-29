import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ProductsComponent } from "./components/products/products.component";
import {HeaderComponent} from "./header/header.component";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule, // Importing PrimeNG's ButtonModule
    CommonModule,
    SidebarComponent,
    ProductsComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  isLoggedOut: boolean=false;


  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const definedRoutes = ['/dashboard', '/products', '/historique','/services']; // Add all defined routes here
        this.isLoggedOut = definedRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
