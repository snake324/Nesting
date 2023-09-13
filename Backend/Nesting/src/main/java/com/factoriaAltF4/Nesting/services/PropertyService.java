package com.factoriaAltF4.Nesting.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaAltF4.Nesting.models.Property;
import com.factoriaAltF4.Nesting.repositories.PropertyRepository;


@Service
public class PropertyService {

    @Autowired
    PropertyRepository repo;

    public List<Property> getAllProperties() {
        return repo.findAll();
    }

    public Property getPropertyById(Long id) {
        Optional<Property> opt = repo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    public Property addProperty(Property property) {
        return repo.save(property);
    }

    public Property updateProperty(Property property) {
        return repo.save(property);
    }

    public void deleteProperty(Property property, Long id) {
        property = getPropertyById(id);
        repo.delete(property);
    }

    public Property updateStatus(Long id, boolean newStatus){
        Property prop = getPropertyById(id);
        prop.setStatus(newStatus);
        return updateProperty(prop);
    }


    public Optional<List<Property>> getPropertyByType(String type){
        return repo.findBytype(type);
    }


}
