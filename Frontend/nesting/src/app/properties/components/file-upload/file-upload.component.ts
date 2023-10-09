import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageService } from '../../service/image.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @ViewChild('imageInput', { static: false }) imageInputRef: ElementRef | undefined;

  selectedImages: File[] = [];

  constructor(public imageService: ImageService) {}

  onFileImageClick(): void {
    const fileInput: HTMLInputElement | null = this.imageInputRef?.nativeElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFilesSelected(event: any) {
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.selectedImages.push(files[i]);
      }
    }
  }

  uploadImages(): void {
    if (this.selectedImages.length > 0) {
      this.imageService.uploadImages(this.selectedImages).subscribe(
        (response) => {
          console.log('Imágenes subidas con éxito', response);
          this.selectedImages = [];
        },
        (error) => {
          console.error('Error al subir imágenes', error);
        }
      );
    }
  }

  getObjectURL(file: File | null): string {
    if (file) {
      return URL.createObjectURL(file);
    }
    return '';
  }
}
