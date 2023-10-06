package com.factoriaAltF4.Nesting.services;

import com.factoriaAltF4.Nesting.models.Card;
import com.factoriaAltF4.Nesting.repositories.CardRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CardServiceTest {

    @Mock
    private CardRepository cardRepository;

    @InjectMocks
    private CardService cardService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetCardById() {

        Long cardId = 1L;
        Card mockCard = new Card();
        mockCard.setId(cardId);
        when(cardRepository.findById(cardId)).thenReturn(Optional.of(mockCard));

        Card result = cardService.getCardById(cardId);

        assertEquals(cardId, result.getId());
    }

    @Test
    public void testGetCardByIdCardNotFound() {

        Long cardId = 1L;
        when(cardRepository.findById(cardId)).thenReturn(Optional.empty());

        Card result = cardService.getCardById(cardId);

        assertNull(result);
    }

    @Test
    public void testUpdateCard() {

        Card mockCard = new Card();
        when(cardRepository.save(mockCard)).thenReturn(mockCard);

        Card updatedCard = cardService.updateCard(mockCard);

        assertEquals(mockCard, updatedCard);
    }

    @Test
    public void testAddCard() {

        Card mockCard = new Card();
        when(cardRepository.save(mockCard)).thenReturn(mockCard);

        Card addedCard = cardService.addCard(mockCard);

        assertEquals(mockCard, addedCard);
    }

    @Test
    public void testDeleteCard() {

        Long cardId = 1L;
        Card mockCard = new Card();
        when(cardRepository.findById(cardId)).thenReturn(Optional.of(mockCard));

        cardService.deleteCard(mockCard, cardId);

        verify(cardRepository, times(1)).delete(mockCard);
    }
}
