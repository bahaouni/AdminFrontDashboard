import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {HeaderComponent} from "../componnents/header/header.component";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {FooterComponent} from "../componnents/footer/footer.component";
import {EventService} from "../../../services/event.service";
import {Service} from "../../../model/Service";

@Component({
  selector: 'app-my-events',
  imports: [
    FormsModule,
    HeaderComponent,
    NgIf,
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
  showModal: boolean = false;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  private loadEvents() {
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

  showCreateModal(): void {
    this.showModal = true;
  }

  closeCreateModal(): void {
    this.showModal = false;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newEvent= {
        name: form.value.name,
        date: form.value.date
      };

      this.eventService.addEvent(newEvent).subscribe({
        next: (response) => {
          console.log('Event created:', response);
          this.events.push(response);
          this.closeCreateModal();
          form.reset();
        },
        error: (error) => {
          console.error('Error creating event:', error);
        },
      });
    }
  }
}
