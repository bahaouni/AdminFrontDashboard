import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../model/Service';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-service-a',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './service-form.component.html',
  standalone: true,
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
  isEditMode: boolean = false;
  service: Service = {
    id: 0,
    adminId: 0,
    name: '',
    description: '',
    price: 0,
    category: ''
  };
  services: Service[] = [];
  newDate: string = '';

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.serviceService.getServices().subscribe({
      next: (response) => {
        console.log('Fetched services:', response); // Log response
        this.services = response;
      },
      error: (err) => {
        console.error('Error fetching services:', err);
      }
    });
  }


  addService() {
    this.serviceService.addService(this.service).subscribe({
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
    this.serviceService.updateService(this.service).subscribe({
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
    this.serviceService.deleteService(serviceId).subscribe({
      next: () => {
        this.services = this.services.filter(service => service.id !== serviceId);
      },
      error: (err) => {
        console.error('Error deleting service:', err);
      }
    });
  }

  editService(service: Service) {
    this.isEditMode = true;
    this.service = { ...service };
  }

  saveService() {
    this.isEditMode ? this.updateService() : this.addService();
  }
  /*
  addDate() {
    if (this.newDate && !this.service.availability.includes(this.newDate)) {
      this.service.availability.push(this.newDate);
      this.newDate = '';
    }
  }

  removeDate(index: number) {
    this.service.availability.splice(index, 1);
  }
 */

  resetForm() {
    this.isEditMode = false;
    this.service = {
      id: 0,
      adminId: 0,
      name: '',
      description: '',
      price: 0,
      category: ''
    };
    this.newDate = '';
  }
}
