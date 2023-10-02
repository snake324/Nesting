package com.factoriaAltF4.Nesting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaAltF4.Nesting.models.Card;
import com.factoriaAltF4.Nesting.services.CardService;

@RestController
@RequestMapping("/cards")
public class CardController {
    
    @Autowired
    CardService service;

    @GetMapping("/{id}")
    public Card getCardById(@PathVariable Long id){
        return service.getCardById(id);
    }

    @PostMapping("/create")
    public Card addCard(@RequestBody Card card){
        return service.addCard(card);
    }

    @PutMapping("/update")
    public Card updateCard(@RequestBody Card card){
        return service.updateCard(card);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCard(Card card, @PathVariable Long id){
        service.deleteCard(card, id);
    }

}
