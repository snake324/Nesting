package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.factoriaAltF4.Nesting.models.Card;
import com.factoriaAltF4.Nesting.services.CardService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CardControllerTest {

  @InjectMocks
  private CardController cardController;

  @Mock
  private CardService cardService;

  @Test
  void testGetCardById() {
    Long cardId = 1L;
    Card mockCard = new Card();
    mockCard.setId(cardId);
    when(cardService.getCardById(cardId)).thenReturn(mockCard);
    Card result = cardController.getCardById(cardId);
    assertEquals(cardId, result.getId());
    verify(cardService, times(1)).getCardById(cardId);
  }

  @Test
  void testAddCard() {
    Card mockCard = new Card();
    when(cardService.addCard(any(Card.class))).thenReturn(mockCard);
    Card result = cardController.addCard(mockCard);
    assertEquals(mockCard, result);
    verify(cardService, times(1)).addCard(mockCard);
  }

  @Test
  void testUpdateCard() {
    Card mockCard = new Card();
    when(cardService.updateCard(any(Card.class))).thenReturn(mockCard);
    Card result = cardController.updateCard(mockCard);
    assertEquals(mockCard, result);
    verify(cardService, times(1)).updateCard(mockCard);
  }

  @Test
  void testDeleteCard() {
    Long cardId = 1L;
    Card mockCard = new Card();
    mockCard.setId(cardId);
    cardController.deleteCard(mockCard, cardId);
    verify(cardService, times(1)).deleteCard(mockCard, cardId);
  }
}
