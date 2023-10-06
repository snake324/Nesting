
package com.factoriaAltF4.Nesting.services;

import com.factoriaAltF4.Nesting.models.Image;
import com.factoriaAltF4.Nesting.repositories.ImageRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ImageServiceTest {

    @Mock
    private ImageRepository imgRepo;

    @InjectMocks
    private ImageService imageService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllImages() {

        List<Image> mockImages = new ArrayList<>();
        when(imgRepo.findAll()).thenReturn(mockImages);

        List<Image> result = imageService.getAllImages();
        assertEquals(mockImages, result);
    }

    @Test
    public void testGetImageById() {

        Long imageId = 1L;
        Image mockImage = new Image();
        mockImage.setId(imageId);
        when(imgRepo.findById(imageId)).thenReturn(Optional.of(mockImage));
        Image result = imageService.getImageById(imageId);
        assertEquals(imageId, result.getId());
    }

    @Test
    public void testAddImage() {

        Image mockImage = new Image();
        when(imgRepo.save(mockImage)).thenReturn(mockImage);
        Image addedImage = imageService.addImage(mockImage);
        assertEquals(mockImage, addedImage);
    }
}
