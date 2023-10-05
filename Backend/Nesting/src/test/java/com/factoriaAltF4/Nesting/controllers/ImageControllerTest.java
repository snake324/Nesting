package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.factoriaAltF4.Nesting.controllers.ImageControler;
import com.factoriaAltF4.Nesting.models.Image;
import com.factoriaAltF4.Nesting.services.ImageService;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

class ImageControllerTest {

  @InjectMocks
  private ImageControler imageController;

  @Mock
  private ImageService imageService;

  @BeforeEach
  void init() {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  void testGetAllImages() {
    List<Image> mockImages = new ArrayList<>();
    when(imageService.getAllImages()).thenReturn(mockImages);

    List<Image> result = imageController.getAllImages();

    assertEquals(mockImages, result);
    verify(imageService, times(1)).getAllImages();
  }

  @Test
  void testGetImageById() {
    Long imageId = 1L;
    Image mockImage = new Image();
    when(imageService.getImageById(imageId)).thenReturn(mockImage);
    Image result = imageController.getImageById(imageId);
    assertEquals(mockImage, result);
    verify(imageService, times(1)).getImageById(imageId);
  }

  @Test
  void testAddImage() {
    Image mockImage = new Image();
    when(imageService.addImage(any(Image.class))).thenReturn(mockImage);
    Image result = imageController.addImage(mockImage);
    assertEquals(mockImage, result);
    verify(imageService, times(1)).addImage(mockImage);
  }
}
