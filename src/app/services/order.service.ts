import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/Order";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderURL = environment.orderURL + '/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(page: number, size: number) {
    return this.http.get<any>(`${(this.orderURL)}?page=0&size=15`);

  }
  createOrder(order: Order): Observable<string> {
    return this.http.post<string>(`${this.orderURL}`, order);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.orderURL}/${id}`);
  }

  updateOrder(order: Order): Observable<string> {
    return this.http.put<string>(`${this.orderURL}`, order);
  }

  deleteOrder(id: number): Observable<string> {
    return this.http.delete<string>(`${this.orderURL}/${id}`);
  }


  //CHECK THESE LATER IF WE NEED THEM OR TOBE REMOVE

/*
  addInventory(inventory: GrpcInventory): Observable<string> {
    return this.http.post<string>(`${this.orderURL}/inventory`, inventory);
  }

  getInventory(id: number): Observable<GrpcInventory> {
    return this.http.get<GrpcInventory>(`${this.orderURL}/inventory/${id}`);
  }

  updateInventory(inventory: GrpcInventory): Observable<string> {
    return this.http.put<string>(`${this.orderURL}/inventory`, inventory);
  }

  deleteInventory(id: number): Observable<string> {
    return this.http.delete<string>(`${this.orderURL}/inventory/${id}`);
  }

  // Linking Orders to Inventory

  linkOrderToInventory(linkRequest: LinkRequest): Observable<string> {
    return this.http.post<string>(`${this.orderURL}/link`, linkRequest);
  }
 */
}
