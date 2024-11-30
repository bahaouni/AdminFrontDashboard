import { Component } from '@angular/core';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [],
  templateUrl: './my-events.component.html',
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
