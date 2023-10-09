import { Component } from '@angular/core';

interface FileWithPreview {
  file: File;
  url: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  selectedFiles: FileWithPreview[] = [];

  onFileChange(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedFiles.push({
          file: file,
          url: e.target.result
        });
      };

      reader.readAsDataURL(file);
    }
  }

  deleteFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }
}

