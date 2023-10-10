package com.factoriaAltF4.Nesting.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

public class PropertyTest {

    private Property property;

    @BeforeEach
    void setUp() {
        property = new Property();
    }

    @Test
    void testGettersAndSetters() {
        property.setTitle("Test Property");
        property.setDescription("Test Description");
        property.setCity("Test City");
        property.setPostalCode("12345");
        property.setAddress("Test Address");
        property.setRooms(3);
        property.setBaths(2);
        property.setSize(150.5);
        property.setPrice(200000.0);
        property.setType("House");
        property.setStatus(true);
        property.setHouseType("Detached");
        property.setPublishDate(LocalDate.now());
        property.setModificationDate(new Timestamp(System.currentTimeMillis()));
        property.setImages(new ArrayList<>());
        property.setPropertiesContact(new HashSet<>());
        property.setProfilePublished(new UserProfile());
        property.setOwnermail("owner@example.com");

        assertEquals("Test Property", property.getTitle());
        assertEquals("Test Description", property.getDescription());
        assertEquals("Test City", property.getCity());
        assertEquals("12345", property.getPostalCode());
        assertEquals("Test Address", property.getAddress());
        assertEquals(3, property.getRooms());
        assertEquals(2, property.getBaths());
        assertEquals(150.5, property.getSize());
        assertEquals(200000.0, property.getPrice());
        assertEquals("House", property.getType());
        assertTrue(property.isStatus());
        assertEquals("Detached", property.getHouseType());
        assertEquals(LocalDate.now(), property.getPublishDate());
        assertNotNull(property.getModificationDate());
        assertNotNull(property.getImages());
        assertNotNull(property.getPropertiesContact());
        assertNotNull(property.getProfilePublished());
        assertEquals("owner@example.com", property.getOwnermail());
    }

    @Test
    void testEqualsAndHashCode() {
        property.setId(1L);
        property.setTitle("Test Property");
        property.setDescription("Test Description");
        property.setCity("Test City");
        property.setPostalCode("12345");
        property.setAddress("Test Address");
        property.setRooms(3);
        property.setBaths(2);
        property.setSize(150.5);
        property.setPrice(200000.0);
        property.setType("House");
        property.setStatus(true);
        property.setHouseType("Detached");
        property.setPublishDate(LocalDate.now());
        property.setModificationDate(new Timestamp(System.currentTimeMillis()));
        property.setImages(new ArrayList<>());
        property.setPropertiesContact(new HashSet<>());
        property.setProfilePublished(new UserProfile());
        property.setOwnermail("owner@example.com");

        Property sameProperty = new Property();
        sameProperty.setId(1L);
        sameProperty.setTitle("Test Property");
        sameProperty.setDescription("Test Description");
        sameProperty.setCity("Test City");
        sameProperty.setPostalCode("12345");
        sameProperty.setAddress("Test Address");
        sameProperty.setRooms(3);
        sameProperty.setBaths(2);
        sameProperty.setSize(150.5);
        sameProperty.setPrice(200000.0);
        sameProperty.setType("House");
        sameProperty.setStatus(true);
        sameProperty.setHouseType("Detached");
        sameProperty.setPublishDate(LocalDate.now());
        sameProperty.setModificationDate(new Timestamp(System.currentTimeMillis()));
        sameProperty.setImages(new ArrayList<>());
        sameProperty.setPropertiesContact(new HashSet<>());
        sameProperty.setProfilePublished(new UserProfile());
        sameProperty.setOwnermail("owner@example.com");

        assertEquals(property, sameProperty);
        assertEquals(property.hashCode(), sameProperty.hashCode());
    }

    @Test
    void testNotEqualsWithDifferentId() {
        property.setId(1L);
        property.setTitle("Test Property");
        property.setDescription("Test Description");
        property.setCity("Test City");
        property.setPostalCode("12345");
        property.setAddress("Test Address");
        property.setRooms(3);
        property.setBaths(2);
        property.setSize(150.5);
        property.setPrice(200000.0);
        property.setType("House");
        property.setStatus(true);
        property.setHouseType("Detached");
        property.setPublishDate(LocalDate.now());
        property.setModificationDate(new Timestamp(System.currentTimeMillis()));
        property.setImages(new ArrayList<>());
        property.setPropertiesContact(new HashSet<>());
        property.setProfilePublished(new UserProfile());
        property.setOwnermail("owner@example.com");

        Property differentId = new Property();
        differentId.setId(2L);

        assertNotEquals(property, differentId);
    }

    @Test
    void testNotEqualsWithDifferentType() {
        property.setId(1L);
        property.setTitle("Test Property");
        property.setDescription("Test Description");
        property.setCity("Test City");
        property.setPostalCode("12345");
        property.setAddress("Test Address");
        property.setRooms(3);
        property.setBaths(2);
        property.setSize(150.5);
        property.setPrice(200000.0);
        property.setType("House");
        property.setStatus(true);
        property.setHouseType("Detached");
        property.setPublishDate(LocalDate.now());
        property.setModificationDate(new Timestamp(System.currentTimeMillis()));
        property.setImages(new ArrayList<>());
        property.setPropertiesContact(new HashSet<>());
        property.setProfilePublished(new UserProfile());
        property.setOwnermail("owner@example.com");

        Property differentType = new Property();
        differentType.setId(1L);
        differentType.setType("Apartment"); 

        assertNotEquals(property, differentType);
    }
}
