import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import {ServiceAService} from "../../services/service-a.service";
import {Router} from "@angular/router";
import {Service} from "../../model/Service";
import {ServiceA} from "../../model/ServiceA"; // Import FormsModule

@Component({
  selector: 'app-products',
  imports: [CommonModule, TableModule, ButtonModule, RatingModule, TagModule, CurrencyPipe, FormsModule], // Add FormsModule here
  templateUrl: './products.component.html',
  standalone: true,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private ServiceA: ServiceAService, private router: Router) {}
  ngOnInit(): void {
    this.getServices();
  }
  services: ServiceA[]=[];

  getServices() {
    this.ServiceA.getServices().subscribe({
      next: (response) => {
        console.log(response);
        this.services = response;
      },
      error: (err) => {
        console.error('Error fetching services:', err);
      }
    });
  }


}
