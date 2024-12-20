import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 0;
  size: number = 5;
  totalPages: number = 0;
  totalUsers: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(this.page, this.size).subscribe(response => {
      this.users = response.content;
      this.totalPages = response.totalPages;
      this.totalUsers = response.totalElements;
    });
  }

  changeRole(email: string, role: string): void {
    this.userService.updateUserRole(email, role).subscribe(() => {
      this.loadUsers();
    });
  }

  loadNextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadUsers();
    }
  }

  loadPreviousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadUsers();
    }
  }

  deleteUser(email: string): void {
    this.userService.deleteUser(email).subscribe(() => {
      this.loadUsers();
    });
  }
}
