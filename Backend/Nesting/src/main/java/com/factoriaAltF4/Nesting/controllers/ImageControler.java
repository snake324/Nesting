package com.factoriaAltF4.Nesting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaAltF4.Nesting.models.Image;
import com.factoriaAltF4.Nesting.services.ImageService;

@RestController
@RequestMapping("/images")
public class ImageControler {
    
    @Autowired
    ImageService imgService;

    @GetMapping
    public List<Image> getAllImages(){
        return imgService.getAllImages();
    }

    @GetMapping("/{id}")
    public Image getImageById(@PathVariable Long id){
        return imgService.getImageById(id);
    }
    
    @PostMapping("/addimg")
    public Image addImage(@RequestBody Image img){
        return imgService.addImage(img);
    }
}
