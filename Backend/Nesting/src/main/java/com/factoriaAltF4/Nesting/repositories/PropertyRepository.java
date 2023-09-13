package com.factoriaAltF4.Nesting.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.factoriaAltF4.Nesting.models.Property;

public interface PropertyRepository extends JpaRepository<Property,Long>{
    
    @Query("SELECT p from Property p WHERE p.type = :type")
    Optional<List<Property>> findBytype(String type);

}
