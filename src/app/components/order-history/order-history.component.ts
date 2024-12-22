import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../../services/user.service";
import {FormsModule} from "@angular/forms";
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/Order";

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  page: number = 0;
  size: number = 5;
  totalPages: number = 0;
  totalOrders: number = 0;

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders(this.page, this.size).subscribe(response => {
      this.orders = response.content;
      this.totalPages = response.totalPages;
      this.totalOrders = response.totalElements;
    });
  }

  deleteOrder(id: number): void {
      this.orderService.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }

  loadNextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadOrders();
    }
  }

  loadPreviousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadOrders();
    }
  }
}
