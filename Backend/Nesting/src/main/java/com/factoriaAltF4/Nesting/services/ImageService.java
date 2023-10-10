package com.factoriaAltF4.Nesting.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaAltF4.Nesting.models.Image;
// import com.factoriaAltF4.Nesting.models.Property;
import com.factoriaAltF4.Nesting.repositories.ImageRepository;

@Service
public class ImageService {
    
    @Autowired
    ImageRepository imgRepo;

    public List<Image> getAllImages(){
        return imgRepo.findAll();
    }

    public Image getImageById(Long id){
         Optional<Image> opt = imgRepo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    public Image addImage(Image img){
        return imgRepo.save(img);
    }

}
