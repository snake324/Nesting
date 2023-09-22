import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-reservemodal',
  templateUrl: './reservemodal.component.html',
  styleUrls: ['./reservemodal.component.scss']
})
export class ReservemodalComponent {
  isVisible: boolean = false;



   openModal() {
     this.isVisible = true;
 }


   closeModal() {
   this.isVisible = false;
 }

}
