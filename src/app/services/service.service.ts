import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/Service';
import { UserDTO } from '../model/User';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private eventURL = 'http://localhost:8089';
  private orderApi = 'http://localhost:8088/api/v1/Orders';
  private userApi = 'http://localhost:8088/api/v1/Users';

  constructor(private http: HttpClient) {}
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.eventURL}/api/v1/services`);
  }

  addService(serviceA: Service): Observable<Service> {
    return this.http.post<Service>(`${this.eventURL}/create`, serviceA);
  }

  updateService(serviceA: Service): Observable<Service> {
    return this.http.put<Service>(`${this.eventURL}/update`, serviceA);
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.eventURL}/${id}`);
  }

  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.userApi);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderApi);
  }
}
