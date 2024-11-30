import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgOptimizedImage
  ]
})
export class HeaderComponent {
  // User information (replace this with dynamic data if needed)
  public user = {
    avatar: 'assets/images/avatars/8.jpg', // Path to user avatar image
  };

  // Example menu items for notifications and tasks
  public newNotifications = [
    { id: 0, title: 'New user registered', icon: 'bi-person-plus', color: 'text-success' },
    { id: 1, title: 'User deleted', icon: 'bi-person-dash', color: 'text-danger' },
    { id: 2, title: 'Sales report ready', icon: 'bi-bar-chart', color: 'text-info' },
  ];

  public newTasks = [
    { id: 0, title: 'Upgrade NPM', value: 20, color: 'bg-info' },
    { id: 1, title: 'ReactJS Version', value: 50, color: 'bg-warning' },
    { id: 2, title: 'Add new layouts', value: 75, color: 'bg-success' },
  ];

  // Sidebar toggle ID (for managing sidebar visibility)
  public sidebarId = 'sidebar1';

  // Logout function
  logout(): void {
    localStorage.removeItem('auth token');
    alert('Logged out successfully!');
  }

  // Placeholder methods for showing notifications and tasks
  showNotifications(): void {
    console.log('Showing notifications...');
  }

  showTasks(): void {
    console.log('Showing tasks...');
  }
}
