import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardSavedSuccessfully$: EventEmitter<void> = new EventEmitter<void>();
  cards: any[] = []; 

  cardSavedSuccessfully() {
    this.cardSavedSuccessfully$.emit();
  }

  saveCardData(data: any) {
    // Aquí deberías implementar la lógica para guardar los datos de la tarjeta,
    // por ejemplo, almacenarlos en un arreglo o en una base de datos.
    console.log('Received card data:', data);
    // Después de guardar los datos, emite el evento para notificar que la tarjeta se guardó correctamente.
    this.cardSavedSuccessfully$.emit();
  }
}
