import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private baseUrl = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  logout(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/logout`, {withCredentials: true});
  }  
}
