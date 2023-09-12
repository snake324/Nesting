import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contactbtn',
  templateUrl: './contactbtn.component.html',
  styleUrls: ['./contactbtn.component.scss']
})
export class ContactBtnComponent {
  @Output() openModalEvent = new EventEmitter();

  openModal() {
    this.openModalEvent.emit();
  }
}
