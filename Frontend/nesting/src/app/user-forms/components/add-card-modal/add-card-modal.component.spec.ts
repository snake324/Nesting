import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCardModalComponent } from './add-card-modal.component';
import { CardService } from '../../service/card.service';

describe('AddCardModalComponent', () => {
  let component: AddCardModalComponent;
  let fixture: ComponentFixture<AddCardModalComponent>;
  let cardService: jasmine.SpyObj<CardService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CardService', ['saveCardData']);

    TestBed.configureTestingModule({
      declarations: [AddCardModalComponent],
      providers: [{ provide: CardService, useValue: spy }],
    });

    fixture = TestBed.createComponent(AddCardModalComponent);
    component = fixture.componentInstance;
    cardService = TestBed.inject(CardService) as jasmine.SpyObj<CardService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveCardData when onSaveCard is called', () => {
    component.name = 'John';
    component.surname = 'Doe';
    component.cardnumber = '1234567890123456';
    component.expiremonth = '12';
    component.expireyear = '2025';

    component.onSaveCard();

    expect(cardService.saveCardData).toHaveBeenCalledWith({
      name: 'John',
      surname: 'Doe',
      cardnumber: '1234567890123456',
      expiremonth: '12',
      expireyear: '2025',
    });
  });
});
