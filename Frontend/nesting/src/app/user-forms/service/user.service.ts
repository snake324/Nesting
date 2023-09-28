import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../user-forms/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:4000/login';
  private baseUrl = 'http://localhost:4000';

  private isAuthenticated: boolean = false;
  private actualUser: User | null = null;
  constructor(private httpClient: HttpClient) {}

  public registerUser(mail: string, password: string): Observable<any> {
    const status = true;

    const user = {
      mail,
      password,
      status: status
    };

    return this.httpClient.post<any>(`${this.baseUrl}/register`, user);
  }
  public loginUser(mail: string, password: string, headers: HttpHeaders): Observable<any> {
    this.isAuthenticated = true;
    return this.httpClient.post<any>(`${this.baseUrl}/login`, {}, { headers, withCredentials: true  });
  }

  public isUserAuthenticated(): User | null {
    return this.isAuthenticated ? this.actualUser : null;
  }

  setUser(user: any) {
    this.actualUser = user;
  }
  getUser(userId: string): Observable<User> {
    const url = `${this.baseUrl}/users/${userId}`; 
    return this.httpClient.get<User>(url);
  }

  getUserIdByEmail(mail: string) {
    const url = `${this.baseUrl}/users/getid?mail=${mail}`;
    return this.httpClient.get<number>(url);
  }

  public logout(): Observable<any> {
    this.actualUser = null;
    this.isAuthenticated = false;
    return this.httpClient.get<any>(`${this.baseUrl}/logout`, { withCredentials: true });
  }  
}