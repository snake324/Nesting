import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-card-added',
  templateUrl: './card-added.component.html',
  styleUrls: ['./card-added.component.scss']
})
export class CardAddedComponent implements OnInit {
  @Input() 
  cards: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.cardSavedSuccessfully$.subscribe(() => {
      this.cards = this.cardService.cards;
  
      console.log('cardData received:', this.cards);
    });
  }
  
  formatCardNumber(cardNumber: string): string {
    // Elimina espacios en blanco y caracteres no numéricos
    const cleanedNumber = cardNumber.replace(/\D/g, '');
    
    // Divide el número en grupos de 4 cifras
    const parts = [];
    for (let i = 0; i < cleanedNumber.length; i += 4) {
      parts.push(cleanedNumber.substring(i, i + 4));
    }
    
    // Une los grupos con espacios
    return parts.join(' ');
  }
  
}
