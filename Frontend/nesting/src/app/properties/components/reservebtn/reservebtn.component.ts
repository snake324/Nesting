import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservebtn',
  templateUrl: './reservebtn.component.html',
  styleUrls: ['./reservebtn.component.scss']
})
export class ReservebtnComponent {
  @Output() openModalEvent = new EventEmitter();

  openModal() {
    this.openModalEvent.emit();
  }
}
