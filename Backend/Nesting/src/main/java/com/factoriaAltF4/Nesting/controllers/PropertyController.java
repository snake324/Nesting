package com.factoriaAltF4.Nesting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaAltF4.Nesting.models.Property;
import com.factoriaAltF4.Nesting.services.PropertyService;

@RestController
@RequestMapping("/properties")
public class PropertyController {
    
    @Autowired
    PropertyService service;

    @GetMapping
    public List<Property> getAllProperties(){
        return service.getAllProperties();
    }

    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable Long id){
        return service.getPropertyById(id);
    }
    

}
