import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  orders = [
    {
      id: '12345',
      status: 'Delivered',
      date: 'December 12, 2023',
      items: 3,
      total: 150,
      badgeClass: 'badge-delivered'
    },
    {
      id: '12346',
      status: 'Pending',
      date: 'December 13, 2023',
      items: 2,
      total: 75,
      badgeClass: 'badge-pending'
    },
    {
      id: '12347',
      status: 'Cancelled',
      date: 'December 14, 2023',
      items: 1,
      total: 45,
      badgeClass: 'badge-cancelled'
    }
  ];
}
