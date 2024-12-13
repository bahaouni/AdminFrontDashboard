import { Component } from '@angular/core';
import {HeaderComponent} from "../componnents/header/header.component";
import {FooterComponent} from "../componnents/footer/footer.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-business',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './business.component.html',
  standalone: true,
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  navigateToBusinessPortal() {
    window.location.href = '/business-portal';
  }
}
