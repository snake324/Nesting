package com.factoriaAltF4.Nesting.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaAltF4.Nesting.models.Card;
import com.factoriaAltF4.Nesting.repositories.CardRepository;

@Service
public class CardService {
    
    @Autowired
    CardRepository cardRepository;

    public Card getCardById(Long id){
         Optional<Card> opt = cardRepository.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    public Card updateCard(Card card){
        return cardRepository.save(card);
    }

    public Card addCard(Card card){
        return cardRepository.save(card);
    }

    public void deleteCard(Card card, Long id){
        card = getCardById(id);
        cardRepository.delete(card);
    }

}
