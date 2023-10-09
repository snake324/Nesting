import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = environment.apiUrl; 

  constructor(private httpClient: HttpClient) { }

  toggleUserStatus(userId: number, newStatus: boolean): Observable<any> {
    const url = `${this.apiUrl}/users/updateStatus/${userId}?newStatus=${newStatus}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.httpClient.put<any>(url, null, { headers });
  }

}
