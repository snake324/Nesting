import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:4000/users';

  constructor(private httpClient: HttpClient) { }

  toggleUserStatus(userId: number, newStatus: boolean): Observable<any> {
    const url = `${this.apiUrl}/updateStatus/${userId}?newStatus=${newStatus}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.httpClient.put<any>(url, null, { headers });
  }

}
