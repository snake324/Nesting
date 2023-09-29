import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardSavedSuccessfully$: EventEmitter<void> = new EventEmitter<void>();
  cards: any[] = [];

  cardSavedSuccessfully() {
    // Aquí, puedes realizar cualquier lógica necesaria, pero no es necesario pasar datos como argumento.
    console.log('Card saved successfully'); // Por ejemplo, puedes imprimir un mensaje.
    
    // Después de guardar los datos, emite el evento para notificar que la tarjeta se guardó correctamente.
    this.cardSavedSuccessfully$.emit();
  }

  saveCardData(data: any) {
    // Aquí deberías implementar la lógica para guardar los datos de la tarjeta,
    // por ejemplo, almacenarlos en un arreglo o en una base de datos.
    console.log('Received card data:', data);
  
    // Guarda los datos de la tarjeta en el arreglo de tarjetas
    this.cards.push(data);
  
    // Llama al método cardSavedSuccessfully después de guardar los datos.
    this.cardSavedSuccessfully();
  }
}
