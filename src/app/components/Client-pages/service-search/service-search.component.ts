import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../../../header/header.component";
import {NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../sidebar/sidebar.component";

@Component({
  selector: 'app-service-search',
  imports: [
    FormsModule,
    HeaderComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './service-search.component.html',
  standalone: true,
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
