import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-card-added',
  templateUrl: './card-added.component.html',
  styleUrls: ['./card-added.component.scss']
})
export class CardAddedComponent implements OnInit {
  @Input() cardData: any = {};

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.cardSavedSuccessfully$.subscribe((data) => {
      this.cardData = data; 
      console.log('cardData received:', this.cardData);
    });
  }
}
