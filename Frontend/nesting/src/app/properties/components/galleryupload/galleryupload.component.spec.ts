import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryuploadComponent } from './galleryupload.component';

describe('GalleryuploadComponent', () => {
  let component: GalleryuploadComponent;
  let fixture: ComponentFixture<GalleryuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryuploadComponent]
    });
    fixture = TestBed.createComponent(GalleryuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
