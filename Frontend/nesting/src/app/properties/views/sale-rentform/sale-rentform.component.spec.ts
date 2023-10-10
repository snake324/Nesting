import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PropertyEditComponent } from 'src/app/user-forms/components/property-edit/property-edit.component';

describe('PropertyEditComponent', () => {
  let component: PropertyEditComponent;
  let fixture: ComponentFixture<PropertyEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyEditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: 'your_test_id_here' }) },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(PropertyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
