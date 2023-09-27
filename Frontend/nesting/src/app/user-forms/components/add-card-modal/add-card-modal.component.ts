import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent implements OnInit {
  name: string = '';
  surname: string = '';
  cardnumber: string = '';
  expiremonth: string = '';
  expireyear: string = '';

  cardData: any = {};

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.cardSavedSuccessfully$.subscribe(() => {
      this.cardData = {
        name: this.name,
        surname: this.surname,
        cardnumber: this.cardnumber,
        expiremonth: this.expiremonth,
        expireyear: this.expireyear
      };
      this.name = '';
      this.surname = '';
      this.cardnumber = '';
      this.expiremonth = '';
      this.expireyear = '';
    });
  }

  onSaveCard() {
    const cardData = {
      name: this.name,
      surname: this.surname,
      cardnumber: this.cardnumber,
      expiremonth: this.expiremonth,
      expireyear: this.expireyear
    };
    
    console.log('Saving card data:', cardData);
    this.cardService.saveCardData(cardData);
  }
}
