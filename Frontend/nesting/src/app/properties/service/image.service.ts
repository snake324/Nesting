import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  uploadImages(images: File[]): Observable<any> {
    const formData: FormData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    return this.http.post<any>(`${this.apiUrl}/images/addimg`, formData);
  }
}
