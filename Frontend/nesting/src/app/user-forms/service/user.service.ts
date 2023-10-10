import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../user-forms/models/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl = environment.apiUrl;

  private isAuthenticated: boolean = false;
  private actualUser: User | null = null;
  constructor(private httpClient: HttpClient) { }

  public registerUser(mail: string, password: string): Observable<any> {
    const status = true;

    const user = {
      mail,
      password,
      status: status
    };

    return this.httpClient.post<any>(`${this.apiUrl}/register`, user);
  }
  public loginUser(mail: string, password: string, headers: HttpHeaders | null = null): Observable<any> {
    this.isAuthenticated = true;

    if (headers) {
      return this.httpClient.post<any>(`${this.apiUrl}/login`, {}, { headers, withCredentials: true });
    } else {
      return this.httpClient.post<any>(`${this.apiUrl}/login`, {}, { withCredentials: true });
    }
  }

  public isUserAuthenticated(): User | null {
    return this.isAuthenticated ? this.actualUser : null;
  }

  setUser(user: any) {
    this.actualUser = user;
  }
  getUser(userId: string): Observable<User> {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.httpClient.get<User>(url);
  }

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/users`;
    return this.httpClient.get<User[]>(url);
  }

  getUserIdByEmail(mail: string) {
    const url = `${this.apiUrl}/users/getid?mail=${mail}`;
    return this.httpClient.get<number>(url);
  }

  public isLogged() {
    const jsessionId = localStorage.getItem("JSESSIONID");
    if (jsessionId) {
      return true;
    } else {
      return false;
    }
  }

  public navigateId() {
    if (this.isLogged()) {
      const userId = localStorage.getItem("userId");
      return userId;
    } else {
      return null;
    }
  }

}