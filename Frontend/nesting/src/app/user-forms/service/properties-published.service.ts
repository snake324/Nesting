import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PropertiesPublishedService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProperties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/properties`).pipe(
      catchError((error: any) => {
        return [];
      })
    );
  }

  getPropertyById(propertyId: string): Observable<any> {
    const url = `${this.apiUrl}/properties/${propertyId}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        return error;
      })
    );
  }

  createProperty(propertyData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/properties/create`, propertyData).pipe(
      catchError((error: any) => {
        return error;
      })
    );
  }

  updateProperty(propertyId: string, propertyData: any): Observable<any> {
    const url = `${this.apiUrl}/properties/update/${propertyId}`;
    return this.http.put(url, propertyData).pipe(
      catchError((error: any) => {
        return error;
      })
    );
  }

  deleteProperty(propertyId: string): Observable<any> {
    const url = `${this.apiUrl}/properties/delete/${propertyId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return error;
      })
    );
  }

  updatePropertyStatus(propertyId: string, newStatus: boolean): Observable<any> {
    const url = `${this.apiUrl}/properties/updateStatus/${propertyId}?newStatus=${newStatus}`;
    return this.http.put(url, {}).pipe(
      catchError((error: any) => {
        return error;
      })
    );
  }
  
}
