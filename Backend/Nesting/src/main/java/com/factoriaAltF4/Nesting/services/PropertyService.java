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

    public List<Property> getAllProperties(){
        return repo.findAll();
    }
    
    public Property getPropertyById(Long id){
         Optional<Property> opt = repo.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }else{
            return null;
        }
    }


    //TODO rest of services - only this for commit and help FRONTENDº

}
