
package com.factoriaAltF4.Nesting.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.sql.Timestamp;

public class ContactsTest {

    private Contacts contacts;

    private Property property;
    private UserProfile profile;

    @BeforeEach
    void setUp() {
        contacts = new Contacts();
        property = new Property();
        profile = new UserProfile();
    }

    @Test
    void testGettersAndSetters() {
        contacts.setProperty(property);
        contacts.setProfile(profile);
        contacts.setContactDate(new Timestamp(System.currentTimeMillis()));

        assertEquals(property, contacts.getProperty());
        assertEquals(profile, contacts.getProfile());
        assertNotNull(contacts.getContactDate());
    }

    @Test
    void testEqualsAndHashCode() {
        contacts.setProperty(property);
        contacts.setProfile(profile);
        contacts.setContactDate(new Timestamp(System.currentTimeMillis()));

        Contacts sameContacts = new Contacts();
        sameContacts.setProperty(property);
        sameContacts.setProfile(profile);
        sameContacts.setContactDate(new Timestamp(System.currentTimeMillis()));

        assertEquals(contacts, sameContacts);
        assertEquals(contacts.hashCode(), sameContacts.hashCode());
    }

    @Test
    void testNotEqualsWithDifferentProperty() {
        contacts.setProperty(property);
        contacts.setProfile(profile);
        contacts.setContactDate(new Timestamp(System.currentTimeMillis()));

        Contacts differentProperty = new Contacts();
        differentProperty.setProperty(new Property()); 

        assertNotEquals(contacts, differentProperty);
    }

    @Test
    void testNotEqualsWithDifferentProfile() {
        contacts.setProperty(property);
        contacts.setProfile(profile);
        contacts.setContactDate(new Timestamp(System.currentTimeMillis()));

        Contacts differentProfile = new Contacts();
        differentProfile.setProperty(property);
        differentProfile.setProfile(new UserProfile());

        assertNotEquals(contacts, differentProfile);
    }

    @Test
    void testNotEqualsWithDifferentContactDate() {
        contacts.setProperty(property);
        contacts.setProfile(profile);
        contacts.setContactDate(new Timestamp(System.currentTimeMillis()));

        Contacts differentContactDate = new Contacts();
        differentContactDate.setProperty(property);
        differentContactDate.setProfile(profile);
        differentContactDate.setContactDate(new Timestamp(System.currentTimeMillis() - 1000));

        assertNotEquals(contacts, differentContactDate);
    }
}
