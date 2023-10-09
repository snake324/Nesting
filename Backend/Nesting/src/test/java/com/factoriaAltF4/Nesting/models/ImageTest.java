package com.factoriaAltF4.Nesting.models;

import com.factoriaAltF4.Nesting.repositories.ImageRepository;
import com.factoriaAltF4.Nesting.repositories.PropertyRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
public class ImageTest {

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @BeforeEach
    public void setUp() {

        Property property = new Property();
        property.setTitle("Mi propiedad de prueba");
        property.setCity("Ciudad de prueba");
        propertyRepository.save(property);

        Image image = new Image();
        image.setImg("imagen_de_prueba.jpg");
        image.setProperty(property);
        imageRepository.save(image);
    }

//     @Test
//     public void testImagePersistence() {

//         Image savedImage = imageRepository.findById(1L).orElse(null);

//         assertNotNull(savedImage);
//         assertEquals("imagen_de_prueba.jpg", savedImage.getImg());

//         assertNotNull(savedImage.getProperty());
//         assertEquals("Mi propiedad de prueba", savedImage.getProperty().getTitle());
//     }
}
