import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventURL = 'http://localhost:8089';
  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.eventURL + "/api/v1/events");
  }
  getEventById(id: number | null): Observable<any[]> {
    return this.http.get<any[]>(this.eventURL + "/api/v1/events/" + id);
  }
  addEvent(event: any): Observable<any> {
    return this.http.post<any>(`${this.eventURL}/api/v1/events`, event);
  }

}
