import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../componnents/header/header.component";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {FooterComponent} from "../componnents/footer/footer.component";
import {EventService} from "./event.service";

@Component({
  selector: 'app-my-events',
  imports: [
    FormsModule,
    HeaderComponent,
    NgIf,
    RouterOutlet,
    SidebarComponent,
    FooterComponent,
    DatePipe,
    NgForOf,
  ],
  templateUrl: './my-events.component.html',
  standalone: true,
  styleUrl: './my-events.component.css'
})
export class MyEventsComponent implements OnInit {

  events: any[] = [];
  loading: boolean = true;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {

    this.eventService.getEvents().subscribe(
      (data) => {
        console.log("data: ", data);
        this.events = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching events:', error);
        this.loading = false;
      }
    );

  }
}
