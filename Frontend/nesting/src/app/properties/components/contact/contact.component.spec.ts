import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactComponent } from './contact.component';
import { PropertiesService } from '../../service/properties.service';
import { Properties } from '../../models/properties.model';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let propertiesServiceSpy: jasmine.SpyObj<PropertiesService>;
  const propertyDetails: Properties = {
    id: 1,
    title: 'Sample Property',
    description: 'This is a sample property.',
    city: 'Sample City',
    postalCode: '12345',
    rooms: 3,
    baths: 2,
    size: 150,
    price: 200000,
    type: 'House',
    status: true,
    houseType: 'Detached',
    publishDate: '2023-01-01',
    modificationDate: '2023-01-02',
    images: [],
    address: '123 Sample St',
    ownermail: 'owner@example.com',
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PropertiesService', ['getProperty']);
  
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: PropertiesService, useValue: spy },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
      ],
    });
  
    propertiesServiceSpy = TestBed.inject(PropertiesService) as jasmine.SpyObj<PropertiesService>;
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch property details on init', fakeAsync(() => {
    propertiesServiceSpy.getProperty.and.returnValue(of(propertyDetails));

    component.ngOnInit();
    tick();

    expect(component.property).toEqual(propertyDetails);
  }));

  it('should send email and navigate back', fakeAsync(() => {
    const emailResponse = { message: 'Email sent successfully' };
    spyOn(component['http'], 'post').and.returnValue(of(emailResponse));
    spyOn(window, 'alert');
    spyOn(component['router'], 'navigate');
  
    component.comment = 'Test comment';
    component.property = { ownermail: 'owner@example.com' };
  
    component.sendEmail();
    tick();
  
    expect(component['http'].post).toHaveBeenCalledOnceWith(jasmine.any(String), {});
    expect(window.alert).toHaveBeenCalledWith(emailResponse.message);
    expect(component['router'].navigate).toHaveBeenCalledWith(['../']);
  }));
});
