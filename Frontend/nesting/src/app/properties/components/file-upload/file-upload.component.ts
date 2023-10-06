import { Component, ElementRef, ViewChild } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @ViewChild('imageInput', { static: false }) imageInputRef: ElementRef | undefined;

  imageUrls: string[] = [];

  onFileImageClick(): void {
    const fileInput: HTMLInputElement | null = this.imageInputRef?.nativeElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFilesSelected(event: any) {
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      this.imageUrls = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.imageUrls.push(this.getObjectURL(file));
      }
    }
  }

  getObjectURL(file: File | null): string {
    if (file) {
      return URL.createObjectURL(file);
    }
    return '';
  }
}
