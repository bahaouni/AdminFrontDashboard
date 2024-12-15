import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  orders = [
    {
      id: 12345,
      bookingId: 54321,
      serviceProviderId: 101,
      serviceId: 202,
      totalAmount: 150,
    },
    {
      id: 12346,
      bookingId: 54322,
      serviceProviderId: 102,
      serviceId: 203,
      totalAmount: 75,
    },
    {
      id: 12347,
      bookingId: 54323,
      serviceProviderId: 103,
      serviceId: 204,
      totalAmount: 45,
    },
  ];
}
