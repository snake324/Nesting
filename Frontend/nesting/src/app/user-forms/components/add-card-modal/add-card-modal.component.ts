import { Component } from '@angular/core';

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent {

  formatCardNumber(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let cleanedValue = inputElement.value.replace(/\D/g, '');
    const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1-');
    
    if (formattedValue.length > 19) {
      cleanedValue = cleanedValue.slice(0, 16);
      inputElement.value = formattedValue.slice(0, 19);
    } else {
      inputElement.value = formattedValue;
    }
  }
}
