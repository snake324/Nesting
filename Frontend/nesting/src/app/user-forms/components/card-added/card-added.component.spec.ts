import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAddedComponent } from './card-added.component';
import { CardService } from '../../service/card.service';
import { of } from 'rxjs';

describe('CardAddedComponent', () => {
  let component: CardAddedComponent;
  let fixture: ComponentFixture<CardAddedComponent>;
  let cardService: jasmine.SpyObj<CardService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CardService', ['cardSavedSuccessfully$', 'get cards']);

    TestBed.configureTestingModule({
      declarations: [CardAddedComponent],
      providers: [{ provide: CardService, useValue: spy }],
    });

    fixture = TestBed.createComponent(CardAddedComponent);
    component = fixture.componentInstance;
    cardService = TestBed.inject(CardService) as jasmine.SpyObj<CardService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format card number correctly', () => {
    const cardNumber = '1234567812345678';
    const formattedNumber = component.formatCardNumber(cardNumber);

    
    const expectedFormattedNumber = '1234 5678 1234 5678';

    expect(formattedNumber).toEqual(expectedFormattedNumber);
  });
});
