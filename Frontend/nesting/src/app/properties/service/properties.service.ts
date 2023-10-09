import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Properties } from '../models/properties.model';
import { Profile } from 'src/app/user-forms/models/profile.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private apiUrl = environment.apiUrl; 
  

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Properties[]> {
    return this.http.get<Properties[]>(`${this.apiUrl}/properties`);
  }

  getProperty(propertyId: number): Observable<Properties> {
    const url = `${this.apiUrl}/properties/${propertyId}`;
    return this.http.get<Properties>(url);
  }

  saveProperty(propertyData: Properties, userId: string | null): Observable<Properties> {
    return this.http.post<Properties>(`${this.apiUrl}/properties/create/${userId}`, propertyData);
  }

  deleteProperty(propertyId: number): Observable<void> {
    const url = `${this.apiUrl}/properties/delete/${propertyId}`;
    return this.http.delete<void>(url);
  }

  getProfileByUserId(userId: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/properties/profile/${userId}`);
  }
}
