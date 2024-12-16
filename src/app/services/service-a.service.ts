import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceA } from '../model/models';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import {UserDTO} from "../model/User";
import {Order} from "../model/Order";

@Injectable({
  providedIn: 'root',
})
export class ServiceAService {
  private services = 'http://localhost:8089/services/v1/service/';
  private api2 = 'http://localhost:8088/services/v1/Orders/'
  private api3 = 'http://localhost:8088/services/v1/Users/'
  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceA[]> {
    return this.http.get<ServiceA[]>(this.services);
  }
  updateService(serviceA: ServiceA): Observable<ServiceA> {
    return this.http.put<ServiceA>(`${this.services}/update`, serviceA);
  }
  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.services}${id}`);
  }
  addService(serviceA: ServiceA): Observable<ServiceA> {
    return this.http.post<ServiceA>(`${this.services}add`, serviceA);
  }
  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.api3}`);
  }
    getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.api2}`);
    }


  }
