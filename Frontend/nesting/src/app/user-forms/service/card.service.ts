import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:4000/cards'; // Cambia la URL según tu configuración de backend

  cardSavedSuccessfully$: EventEmitter<void> = new EventEmitter<void>();
  cards: any[] = [];

  constructor(private http: HttpClient) {}

  cardSavedSuccessfully() {
    // Aquí, puedes realizar cualquier lógica necesaria, pero no es necesario pasar datos como argumento.
    console.log('Card saved successfully'); // Por ejemplo, puedes imprimir un mensaje.
    
    // Después de guardar los datos, emite el evento para notificar que la tarjeta se guardó correctamente.
    this.cardSavedSuccessfully$.emit();
  }

  saveCardData(data: any) {
    // Aquí deberías implementar la lógica para guardar los datos de la tarjeta en el backend.
    // Puedes usar HttpClient para enviar una solicitud POST al endpoint /create.
    console.log('Sending card data to backend:', data);

    this.http.post(`${this.apiUrl}/create`, data).subscribe(
      (response) => {
        console.log('Card saved successfully in the backend:', response);
        // Llama al método cardSavedSuccessfully después de guardar los datos en el backend.
        this.cardSavedSuccessfully();
      },
      (error) => {
        console.error('Error saving card data in the backend:', error);
        // Aquí puedes manejar errores si es necesario.
      }
    );
  }
}

