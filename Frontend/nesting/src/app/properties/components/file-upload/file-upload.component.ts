import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedImages: string[] = [];

  @ViewChild('imageInput', { static: false }) imageInputRef: ElementRef | undefined;

  onFilesSelected(event: any) {
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = URL.createObjectURL(file);
        this.selectedImages.push(imageUrl);
      }
    }
  }
}