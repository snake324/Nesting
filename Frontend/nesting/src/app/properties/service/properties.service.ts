import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Properties } from '../models/properties.model';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private apiUrl = 'http://localhost:4000/properties';

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Properties[]> {
    return this.http.get<Properties[]>(this.apiUrl);
  }

  getProperty(propertyId: string): Observable<Properties> {
    const url = `${this.apiUrl}/${propertyId}`; 
    return this.http.get<Properties>(url);
  }

  saveProperty(propertyData: Properties): Observable<Properties> {
    return this.http.post<Properties>(`${this.apiUrl}/create`, propertyData);
  }

  deleteProperty(propertyId: string): Observable<Properties> {
    return this.http.delete<Properties>(`${this.apiUrl}/delete/${propertyId}`);
  }
}
