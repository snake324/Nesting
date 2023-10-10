import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { CardService } from '../../service/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { UserdataComponent } from '../../components/userdata/userdata.component';
import { AddCardModalComponent } from '../../components/add-card-modal/add-card-modal.component';
import { PropertiesPublishedListComponent } from '../../components/properties-published-list/properties-published-list.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let cardService: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ProfileComponent, UserdataComponent, AddCardModalComponent, PropertiesPublishedListComponent],
      providers: [
        {
          provide: CardService,
          useValue: {
            cardSavedSuccessfully$: new BehaviorSubject<void>(undefined),
            cards: [],
          },
        },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'someId' } } },
        },
        { provide: Router, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    cardService = TestBed.inject(CardService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle cardSavedSuccessfully event', fakeAsync(() => {
    cardService.cardSavedSuccessfully$.next();
    tick();
    expect(component.showCardAdded).toBe(false);
  }));

  it('should hide cardAdded on hideCardAdded', () => {
    component.showCardAdded = true;
    component.hideCardAdded();
    expect(component.showCardAdded).toBe(false);
  });

  
});
