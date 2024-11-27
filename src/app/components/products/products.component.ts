import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RatingModule, TagModule, CurrencyPipe, FormsModule], // Add FormsModule here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Product 1',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      rating: 4,
      inventoryStatus: 'INSTOCK'
    },
    {
      name: 'Product 2',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      rating: 5,
      inventoryStatus: 'LOWSTOCK'
    },
    {
      name: 'Product 3',
      image: 'gaming-set.jpg',
      price: 120,
      category: 'Electronics',
      rating: 3,
      inventoryStatus: 'OUTOFSTOCK'
    }
    // Add more products as needed
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
