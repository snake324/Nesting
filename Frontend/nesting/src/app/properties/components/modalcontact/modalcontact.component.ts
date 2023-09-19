import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modalcontact',
  templateUrl: './modalcontact.component.html',
  styleUrls: ['./modalcontact.component.scss'],
})
export class ModalcontactComponent {
  isVisible: boolean = false;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
