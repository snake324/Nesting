import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:4000/profile';

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }

  getProfile(profileId: string): Observable<Profile> {
    const url = `${this.apiUrl}/${profileId}`; 
    return this.http.get<Profile>(url);
  }

  saveProfile(profileData: Profile): Observable<Profile> {
    return this.http.post<Profile>(`http://localhost:4000/register/profile`, profileData);
  }

  deleteProfile(profileId: string): Observable<Profile> {
    return this.http.delete<Profile>(`${this.apiUrl}/delete/${profileId}`);
  }
}
