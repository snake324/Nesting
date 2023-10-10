import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';  
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SaleRentformComponent } from './sale-rentform.component';
import { SaleRentComponent } from '../../components/sale-rent/sale-rent.component';
import { HttpClientModule } from '@angular/common/http';  
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';
import { PreviewbtnComponent } from '../../components/previewbtn/previewbtn.component';

describe('SaleRentFormComponent', () => {
  let component: SaleRentformComponent;
  let fixture: ComponentFixture<SaleRentformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleRentformComponent, SaleRentComponent, FileUploadComponent, PreviewbtnComponent],
      imports: [HttpClientModule, ReactiveFormsModule],  
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: 'your_test_id_here' }) },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(SaleRentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
