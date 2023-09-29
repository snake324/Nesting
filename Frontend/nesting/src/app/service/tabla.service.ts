import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablaService {
  private apiUrl = 'https://localhost:4000/admin'; // Reemplaza con la URL de tu backend
  private baseUrl = 'http://localhost:4000';
  
  constructor(private http: HttpClient) {}

  getTablaData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin`);
  }

  getTablaIdByEmail(mail: string) {
    const url = `${this.baseUrl}/users/getid?mail=${mail}`;
    return this.http.get<number>(url);
  }

}
