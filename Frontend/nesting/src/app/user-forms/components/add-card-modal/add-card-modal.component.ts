import { Component } from '@angular/core';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent {
  name: string = '';
  surname: string = '';
  cardnumber: string = '';
  expiremonth: string = '';
  expireyear: string = '';

  constructor(private cardService: CardService) {}

  onSaveCard() {
    const cardData = {
      name: this.name,
      surname: this.surname,
      cardnumber: this.cardnumber,
      expiremonth: this.expiremonth,
      expireyear: this.expireyear
    };
    
    this.cardService.saveCardData(cardData);
  }
}

