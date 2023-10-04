import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:4000/cards';

  cardSavedSuccessfully$: EventEmitter<void> = new EventEmitter<void>();
  cards: any[] = [];

  constructor(private http: HttpClient) {}

  cardSavedSuccessfully() {
    console.log('Card saved successfully');
    
    this.cardSavedSuccessfully$.emit();
  }

  saveCardData(data: any) {
    console.log('Sending card data to backend:', data);

    this.http.post(`${this.apiUrl}/create`, data).subscribe(
      (response) => {
        console.log('Card saved successfully in the backend:', response);
        this.cardSavedSuccessfully();
      },
      (error) => {
        console.error('Error saving card data in the backend:', error);
      }
    );
  }

  getAllCards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCardById(cardId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cardId}`);
  }

  deleteCard(cardId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${cardId}`);
  }
}

