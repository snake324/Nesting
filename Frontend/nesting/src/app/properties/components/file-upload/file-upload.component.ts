import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class TuComponenteComponent {
  selectedFiles: File[] = [];

  onFileChange(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.selectedFiles.push(event.target.files[i]);
    }
  }

  deleteFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }
}

