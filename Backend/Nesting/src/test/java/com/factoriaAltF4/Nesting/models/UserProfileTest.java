package com.factoriaAltF4.Nesting.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertNull;

import static org.mockito.Mockito.mock;

public class UserProfileTest {

    private UserProfile userProfile;
    private User user;
    private Card card;
    private List<Property> propertiesPublished;
    private Set<Contacts> profilContacts;

    @BeforeEach
    public void setUp() {

        user = mock(User.class);

        card = new Card();
        card.setId(1L);
        // card.setCardNumber("123456789");

        propertiesPublished = new ArrayList<>();
        Property property1 = new Property();
        property1.setId(1L);
        property1.setTitle("Casa en la playa");

        Property property2 = new Property();
        property2.setId(2L);
        property2.setTitle("Apartamento en la ciudad");

        propertiesPublished.add(property1);
        propertiesPublished.add(property2);

        profilContacts = mock(Set.class);

        userProfile = new UserProfile();
        userProfile.setId(1L);
        userProfile.setName("John");
        userProfile.setLastname("Doe");
        userProfile.setAddress("123 Main St");
        userProfile.setUser(user);
        userProfile.setCard(card);
        userProfile.setProfilContacts(profilContacts);
        userProfile.setPropertiesPublished(propertiesPublished);
    }

    @Test
    public void testUserProfileModel() {

        assertEquals(1L, userProfile.getId());
        assertEquals("John", userProfile.getName());
        assertEquals("Doe", userProfile.getLastname());
        assertEquals("123 Main St", userProfile.getAddress());
        assertEquals(user, userProfile.getUser());
        assertEquals(card, userProfile.getCard());
        assertEquals(profilContacts, userProfile.getProfilContacts());
        assertEquals(propertiesPublished, userProfile.getPropertiesPublished());
    }

    @Test
    public void testUserProfileNoCard() {

        UserProfile userProfileNoCard = new UserProfile();
        assertNull(userProfileNoCard.getCard());
    }
}
