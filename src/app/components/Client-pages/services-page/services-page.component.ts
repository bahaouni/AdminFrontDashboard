import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { HeaderComponent } from "../componnents/header/header.component";
import { FooterComponent } from "../componnents/footer/footer.component";


@Component({
  selector: 'app-services-page',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule,
    ButtonModule,
    DialogModule,
    CardModule,
    TableModule,
    InputTextModule,
    DropdownModule, HeaderComponent, FooterComponent],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css'], // Use correct `styleUrls`
})
export class ServicesPageComponent {
  eventName: string = 'Wedding Event';
  services = [
    {
      name: 'Venue Decoration',
      description: 'Elegant and customized decorations for your wedding.',
      price: 500,
      image: 'photography.jpg',
    },
    {
      name: 'Music Band',
      description: 'Live music by top bands for your special day.',
      price: 1000,
      image: 'photography.jpg',
    },
    {
      name: 'Photography',
      description: 'Professional photography to capture your memories.',
      price: 800,
      image: 'photography.jpg',
    },
    {
      name: 'Catering',
      description: 'Delicious menus tailored to your preferences.',
      price: 1500,
      image: 'photography.jpg',
    },
  ];
  displayDialog: boolean = false;
  selectedService: any = null;

  bookService(service: any) {
    this.selectedService = service;
  
    // Trigger Bootstrap modal programmatically
    const modalElement = document.getElementById('serviceDetailsModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  
  confirmBooking() {
    this.displayDialog = false;
    alert(`Booking confirmed for ${this.selectedService.name}!`);
  }
  }
