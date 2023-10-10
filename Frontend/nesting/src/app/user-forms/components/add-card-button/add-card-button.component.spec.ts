import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCardButtonComponent } from './add-card-button.component';
import { CardService } from '../../service/card.service';

describe('AddCardButtonComponent', () => {
  let component: AddCardButtonComponent;
  let fixture: ComponentFixture<AddCardButtonComponent>;
  let cardService: jasmine.SpyObj<CardService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CardService', ['cardSavedSuccessfully']);

    TestBed.configureTestingModule({
      declarations: [AddCardButtonComponent],
      providers: [{ provide: CardService, useValue: spy }],
    });

    fixture = TestBed.createComponent(AddCardButtonComponent);
    component = fixture.componentInstance;
    cardService = TestBed.inject(CardService) as jasmine.SpyObj<CardService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cardSavedSuccessfully when onSaveCard is called', () => {
    component.onSaveCard();
    expect(cardService.cardSavedSuccessfully).toHaveBeenCalled();
  });
});
