import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../../../header/header.component";
import {NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../sidebar/sidebar.component";

@Component({
  selector: 'app-my-events',
  imports: [
    FormsModule,
    HeaderComponent,
    NgIf,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './my-events.component.html',
  standalone: true,
  styleUrl: './my-events.component.css'
})
export class MyEventsComponent {
  events = [
    { name: 'Conference', date: '2024-12-01' },
    { name: 'Birthday Party', date: '2024-12-10' },
  ];
  newEvent = { name: '', date: '' };

  addEvent() {
    if (this.newEvent.name && this.newEvent.date) {
      this.events.push({ ...this.newEvent });
      this.newEvent = { name: '', date: '' };
    }
  }
}
