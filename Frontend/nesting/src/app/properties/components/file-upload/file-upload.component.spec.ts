import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploadComponent } from './file-upload.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { ImageService } from '../../service/image.service';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadComponent],
      imports: [HttpClientTestingModule],  // Agrega HttpClientTestingModule a los imports
      providers: [
        ImageService,  // Proporciona ImageService
      ],
    });
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger file input click', () => {
    const fileInputSpy = spyOn(component.imageInputRef!.nativeElement, 'click');
    component.onFileImageClick();
    expect(fileInputSpy).toHaveBeenCalled();
  });

  it('should add selected files to selectedImages', () => {
    const file1 = new File([''], 'file1.txt');
    const file2 = new File([''], 'file2.txt');
    const event = {
      target: {
        files: [file1, file2]
      }
    };
    component.onFilesSelected(event);
    expect(component.selectedImages).toEqual([file1, file2]);
  });
});
