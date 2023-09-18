package com.factoriaAltF4.Nesting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.factoriaAltF4.Nesting.models.Image;

public interface ImageRepository extends JpaRepository<Image,Long> {
    
    List<Image> findByPropertyId(Long id);

}
