package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.factoriaAltF4.Nesting.models.Image;
import com.factoriaAltF4.Nesting.models.Property;
import com.factoriaAltF4.Nesting.services.ImageService;
import com.factoriaAltF4.Nesting.services.PropertyService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
class PropetyControllerTest {

  @InjectMocks
  private PropertyController propertyController;

  @Mock
  private PropertyService propertyService;

  @Mock
  private ImageService imageService;

  @Autowired
  private MockMvc mockMvc;

  @BeforeEach
  void init() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void testGetAllProperties() {
    List<Property> mockProperties = new ArrayList<>();
    when(propertyService.getAllProperties()).thenReturn(mockProperties);

    List<Property> result = propertyController.getAllProperties();

    assertEquals(mockProperties, result);
    verify(propertyService, times(1)).getAllProperties();
  }

  @Test
  void testGetPropertyById() {
    Long propertyId = 1L;
    Property mockProperty = new Property();
    when(propertyService.getPropertyById(propertyId)).thenReturn(mockProperty);

    Property result = propertyController.getPropertyById(propertyId);

    assertEquals(mockProperty, result);
    verify(propertyService, times(1)).getPropertyById(propertyId);
  }

  @Test
  void testUpdateStatus() {
    Long propertyId = 1L;
    boolean newStatus = true;
    Property mockProperty = new Property();
    when(propertyService.updateStatus(propertyId, newStatus))
      .thenReturn(mockProperty);

    ResponseEntity<Property> responseEntity = propertyController.updateStatus(
      propertyId,
      newStatus
    );

    assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    Property responseBody = responseEntity.getBody();
    assertEquals(mockProperty, responseBody);
    verify(propertyService, times(1)).updateStatus(propertyId, newStatus);
  }

  @Test
  void testAddImageToProperty() {
    Long propertyId = 1L;
    String img = "image-url";
    Image mockImage = new Image();
    Property mockProperty = new Property();
    when(imageService.addImage(any(Image.class))).thenReturn(mockImage);
    when(propertyService.addImageToProp(img, propertyId, mockImage))
      .thenReturn(mockProperty);

    Property result = propertyController.addImageToPorperty(
      propertyId,
      img,
      mockImage
    );

    assertEquals(mockProperty, result);
    verify(imageService, times(1)).addImage(mockImage);
    verify(propertyService, times(1))
      .addImageToProp(img, propertyId, mockImage);
  }
}
