import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showCardAdded: boolean = false;
  cards: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.cardSavedSuccessfully$.subscribe(() => {
      this.showCardAdded = true;
      this.cards = this.cardService.cards;
      console.log('cards received in ProfileComponent:', this.cards);
    });
  }

  hideCardAdded() {
    this.showCardAdded = false;
  }
}
