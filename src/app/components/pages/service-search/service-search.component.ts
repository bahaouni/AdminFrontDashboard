import { Component } from '@angular/core';

@Component({
  selector: 'app-service-search',
  standalone: true,
  imports: [],
  templateUrl: './service-search.component.html',
  styleUrl: './service-search.component.css'
})
export class ServiceSearchComponent {
  services = [
    { name: 'Photography', cost: 500 },
    { name: 'Catering', cost: 1200 },
  ];
  newService = { name: '', cost: 0 };

  addService() {
    if (this.newService.name && this.newService.cost > 0) {
      this.services.push({ ...this.newService });
      this.newService = { name: '', cost: 0 };
    }
  }
}
