import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageService } from '../../service/image.service';

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

  constructor(public imageService: ImageService) {}

  deleteFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  @ViewChild('imageInput', { static: false }) imageInputRef: ElementRef | undefined;

  onFilesSelected(event: any) {
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = URL.createObjectURL(file);
        this.selectedFiles.push({ file, url: imageUrl });
      }
    }
  }
}
