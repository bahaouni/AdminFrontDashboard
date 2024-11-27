import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceA } from '../../model/models'; // Import the ServiceA model
import { FormsModule } from '@angular/forms';
import { ServiceAService } from '../../services/service-a.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-service-a',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './service-a.component.html',
  styleUrls: ['./service-a.component.css']
})
export class ServiceAComponent implements OnInit {
  isEditMode: boolean = false;
  serviceA: ServiceA = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    capacity: 0,
    availability: []
  };
  services: ServiceA[] = [];
  newDate: string = '';

  constructor(private serviceAService: ServiceAService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.serviceAService.getServices().subscribe({
      next: (response) => {
        this.services = response;
      },
      error: (err) => {
        console.error('Error fetching services:', err);
      }
    });
  }

  addService() {
    this.serviceAService.addService(this.serviceA).subscribe({
      next: (response) => {
        this.services.push(response);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error adding service:', err);
      }
    });
  }

  updateService() {
    this.serviceAService.updateService(this.serviceA).subscribe({
      next: (response) => {
        const index = this.services.findIndex(s => s.id === response.id);
        if (index !== -1) this.services[index] = response;
        this.resetForm();
      },
      error: (err) => {
        console.error('Error updating service:', err);
      }
    });
  }

  deleteService(serviceId: number) {
    this.serviceAService.deleteService(serviceId).subscribe({
      next: () => {
        this.services = this.services.filter(service => service.id !== serviceId);
      },
      error: (err) => {
        console.error('Error deleting service:', err);
      }
    });
  }

  editService(service: ServiceA) {
    this.isEditMode = true;
    this.serviceA = { ...service };
  }

  saveService() {
    this.isEditMode ? this.updateService() : this.addService();
  }

  addDate() {
    if (this.newDate && !this.serviceA.availability.includes(this.newDate)) {
      this.serviceA.availability.push(this.newDate);
      this.newDate = '';
    }
  }

  removeDate(index: number) {
    this.serviceA.availability.splice(index, 1);
  }

  resetForm() {
    this.isEditMode = false;
    this.serviceA = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      capacity: 0,
      availability: []
    };
    this.newDate = '';
  }
}
