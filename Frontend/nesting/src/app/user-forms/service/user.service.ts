import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../../user-forms/models/user.model';
import { Profile } from '../models/profile.model';

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

    // Send the registration request to create the user
    return this.httpClient.post<any>(`${this.baseUrl}/register`, user)
      .pipe(
        // Handle the response and generate a userProfile
        map((response: any) => {
          // Assuming the response includes the newly created user's ID
          const userId = response.userId;

          // Generate a userProfile with the same ID as the user
          const userProfile: Profile = {
            id: userId,
            name: 'Nombre',
            lastname: 'Apellido',
            address: 'Dirección',
            card: null,
            propertiesPublished: []
          };

          // Send a request to create the userProfile associated with the user
          return this.httpClient.post<any>(`${this.baseUrl}/register/profile`, userProfile);
        })
      );
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

}