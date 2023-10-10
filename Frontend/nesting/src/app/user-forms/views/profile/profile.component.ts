import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showCardAdded: boolean = false;
  cards: any[] = [];

  constructor(private cardService: CardService, 
    private route: ActivatedRoute,
    private router: Router,) {}

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

  goBack() {
    this.router.navigate(['../']);
  }
}
