import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceA } from '../model/ServiceA';
import { UserDTO } from '../model/User';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root',
})
export class ServiceAService {
  private serviceApi = 'http://localhost:8091/api/v1/serviceA'; // Backend API for ServiceA
  private orderApi = 'http://localhost:8088/api/v1/Orders'; // Backend API for Orders
  private userApi = 'http://localhost:8088/api/v1/Users'; // Backend API for Users

  constructor(private http: HttpClient) {}

  /**
   * Get all services
   */
  getServices(): Observable<ServiceA[]> {
    return this.http.get<ServiceA[]>(`${this.serviceApi}/`);
  }

  /**
   * Create a new service
   */
  addService(serviceA: ServiceA): Observable<ServiceA> {
    return this.http.post<ServiceA>(`${this.serviceApi}/create`, serviceA);
  }

  /**
   * Update an existing service
   */
  updateService(serviceA: ServiceA): Observable<ServiceA> {
    return this.http.put<ServiceA>(`${this.serviceApi}/update`, serviceA);
  }

  /**
   * Delete a service by ID
   */
  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.serviceApi}/${id}`);
  }

  /**
   * Get all users
   */
  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.userApi);
  }

  /**
   * Get all orders
   */
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderApi);
  }
}
