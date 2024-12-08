import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceA } from '../model/models';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceAService {
  private api = 'http://localhost:8088/api/v1/ServiceA/';

  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceA[]> {
    return this.http.get<ServiceA[]>(this.api);
  }
  updateService(serviceA: ServiceA): Observable<ServiceA> {
    return this.http.put<ServiceA>(`${this.api}update`, serviceA);
  }
  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}${id}`);
  }
  addService(serviceA: ServiceA): Observable<ServiceA> {
    return this.http.post<ServiceA>(`${this.api}add`, serviceA);
  }
  
  }
