import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'http://localhost:4000/images';

  constructor(private http: HttpClient) {}

  uploadImages(images: File[]): Observable<any> {
    const formData: FormData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    return this.http.post<any>(`${this.baseUrl}/addimg`, formData);
  }
}
