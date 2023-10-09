import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomecardsComponent } from '../../components/homecards/homecards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PriceFormatPipe } from '../../pipes/price-format.pipe';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HomecardsComponent, PriceFormatPipe],  // Agrega PriceFormatPipe a las declaraciones
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // No es necesario en este caso
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
