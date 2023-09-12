import { Component } from '@angular/core';

@Component({
  selector: 'app-modalcontact',
  templateUrl: './modalcontact.component.html',
  styleUrls: ['./modalcontact.component.scss']
})
export class ModalcontactComponent {
  isVisible = false;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
