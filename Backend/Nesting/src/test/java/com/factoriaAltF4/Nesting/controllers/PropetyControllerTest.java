package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import com.factoriaAltF4.Nesting.models.Image;
import com.factoriaAltF4.Nesting.models.Property;
import com.factoriaAltF4.Nesting.services.ImageService;
import com.factoriaAltF4.Nesting.services.PropertyService;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

class PropetyControllerTest {

  @InjectMocks
  private PropertyController propertyController;

  @Mock
  private PropertyService propertyService;

  @Mock
  private ImageService imageService;

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
  void testAddProperty() {
    Property mockProperty = new Property();
    when(propertyService.addProperty(any(Property.class)))
      .thenReturn(mockProperty);

    ResponseEntity<Property> responseEntity = propertyController.addProperty(
      mockProperty
    );

    assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
    Property responseBody = responseEntity.getBody();
    assertEquals(mockProperty, responseBody);
    verify(propertyService, times(1)).addProperty(mockProperty);
  }

  @Test
  void testUpdateProperty() {
    Long propertyId = 1L;
    Property mockProperty = new Property();
    when(propertyService.getPropertyById(propertyId)).thenReturn(mockProperty);

    ResponseEntity<Property> responseEntity = propertyController.updateProperty(
      mockProperty,
      propertyId
    );

    assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    Property responseBody = responseEntity.getBody();
    assertEquals(mockProperty, responseBody);
    verify(propertyService, times(1)).updateProperty(mockProperty);
  }

  @Test
  void testDeleteProperty() {
    Long propertyId = 1L;
    Property mockProperty = new Property();
    when(propertyService.getPropertyById(propertyId)).thenReturn(mockProperty);

    propertyController.deleteProperty(mockProperty, propertyId);

    verify(propertyService, times(1)).deleteProperty(mockProperty, propertyId);
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
