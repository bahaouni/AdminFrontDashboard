import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8089/api/v1/admin/users';

  constructor(private http: HttpClient) { }

  // Get users with pagination
  getUsers(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  // Update user role
  updateUserRole(email: string, role: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${email}/roles`, role);
  }

  // Delete a user by email
  deleteUser(email: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${email}`);
  }
}
