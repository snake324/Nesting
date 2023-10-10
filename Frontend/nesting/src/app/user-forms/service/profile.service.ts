import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = environment.apiUrl;  

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiUrl}/profile`);
  }

  getProfile(profileId: string): Observable<Profile> {
    const url = `${this.apiUrl}/profile/${profileId}`; 
    return this.http.get<Profile>(url);
  }

  saveProfile(profileData: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiUrl}/profile/update/${profileData.id}`, profileData);
  }

  deleteProfile(profileId: string): Observable<Profile> {
    return this.http.delete<Profile>(`${this.apiUrl}/profile/delete/${profileId}`);
  }
  
}
