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
        property.setTitle("Encantador Piso en el Centro Histórico");
        property.setCity("Madrid");
        propertyRepository.save(property);

        Image image = new Image();
        image.setImg("/img1_prop1.jpg");
        image.setProperty(property);
        imageRepository.save(image);
    }

    @Test
    public void testImagePersistence() {

        Image savedImage = imageRepository.findById(1L).orElse(null);

        assertNotNull(savedImage);
        assertEquals("/img1_prop1.jpg", savedImage.getImg());

        assertNotNull(savedImage.getProperty());
        assertEquals("Encantador Piso en el Centro Histórico", savedImage.getProperty().getTitle());
    }
}
