import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../my-events/event.service";

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.component.html',
  standalone: true,
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  projectId: number | null = null;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = Number(params.get('id'));
      console.log('Project ID:', this.projectId);
    });

    this.eventService.getEventById(this.projectId).subscribe(
      (data) => {
        console.log("data: ", data);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );

  }

}
