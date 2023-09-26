import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showCardAdded: boolean = false;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.cardSavedSuccessfully$.subscribe(() => {
      this.showCardAdded = true;
    });
  }

  hideCardAdded() {
    this.showCardAdded = false;
  }
  
}
