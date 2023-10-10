import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CardService } from './card.service';
import { environment } from 'src/environments/environment.development';

describe('CardService', () => {
  let service: CardService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardService],
    });

    service = TestBed.inject(CardService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save card data successfully', () => {
    const mockCardData = {};

    service.cardSavedSuccessfully$.subscribe(() => {});

    service.saveCardData(mockCardData);

    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/cards/create`
    );
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
});
