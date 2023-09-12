package com.factoriaAltF4.Nesting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.factoriaAltF4.Nesting.models.Card;

public interface CardRepository extends JpaRepository<Card,Long>{
    
}
