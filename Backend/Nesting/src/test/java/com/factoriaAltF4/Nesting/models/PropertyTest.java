// package com.factoriaAltF4.Nesting.models;

// import com.factoriaAltF4.Nesting.repositories.PropertyRepository;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.transaction.annotation.Transactional;
// import java.sql.Timestamp;
// import java.time.LocalDate;
// import java.util.ArrayList;
// import java.util.List;
// import static org.junit.jupiter.api.Assertions.*;

// @SpringBootTest // Anotación para cargar la aplicación Spring para pruebas
// @Transactional // Anotación para habilitar transacciones en las pruebas
// public class PropertyTest {

//     @Autowired
//     private PropertyRepository propertyRepository;

//     @Autowired
//     // private ImageRepository imageRepository;

//     @BeforeEach
//     public void setUp() {
//         // Crear una propiedad con imágenes para probar
//         Property property = new Property();
//         property.setTitle("Mi propiedad de prueba");
//         property.setCity("Ciudad de prueba");
//         property.setRooms(3);
//         property.setBaths(2);
//         property.setPrice(200000.0);
//         property.setStatus(true);
//         property.setPublishDate(LocalDate.now());
//         property.setModificationDate(new Timestamp(System.currentTimeMillis()));

//         // Crear imágenes asociadas a la propiedad
//         List<Image> images = new ArrayList<>();
//         Image image1 = new Image();
//         image1.setImg("imagen1.jpg");
//         image1.setProperty(property);
//         images.add(image1);

//         Image image2 = new Image();
//         image2.setImg("imagen2.jpg");
//         image2.setProperty(property);
//         images.add(image2);

//         property.setImages(images);

//         propertyRepository.save(property);
//     }

//     @Test
//     public void testPropertyPersistence() {
//         // Obtener la propiedad de la base de datos
//         Property savedProperty = propertyRepository.findById(1L).orElse(null);

//         // Verificar que la propiedad se haya guardado correctamente
//         assertNotNull(savedProperty);
//         assertEquals("Mi propiedad de prueba", savedProperty.getTitle());
//         assertEquals("Ciudad de prueba", savedProperty.getCity());
//         assertEquals(3, savedProperty.getRooms());
//         assertEquals(2, savedProperty.getBaths());
//         assertEquals(200000.0, savedProperty.getPrice());
//         assertTrue(savedProperty.isStatus());
//         assertNotNull(savedProperty.getPublishDate());
//         assertNotNull(savedProperty.getModificationDate());

//         // Verificar que la propiedad tenga imágenes asociadas
//         assertNotNull(savedProperty.getImages());
//         assertFalse(savedProperty.getImages().isEmpty());
//         assertEquals(2, savedProperty.getImages().size());
//         assertEquals("imagen1.jpg", savedProperty.getImages().get(0).getImg());
//         assertEquals("imagen2.jpg", savedProperty.getImages().get(1).getImg());
//     }
// }
