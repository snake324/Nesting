import { Component, EventEmitter, Output } from '@angular/core';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-add-card-button',
  templateUrl: './add-card-button.component.html',
  styleUrls: ['./add-card-button.component.scss']
})
export class AddCardButtonComponent {

  constructor(private cardService: CardService) {}

  onSaveCard() {
    this.cardService.cardSavedSuccessfully();
  }
}