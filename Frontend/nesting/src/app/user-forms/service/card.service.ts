import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardSavedSuccessfully$: EventEmitter<void> = new EventEmitter<void>();

  cardSavedSuccessfully() {
    this.cardSavedSuccessfully$.emit();
  }
}
