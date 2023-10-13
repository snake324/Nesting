package com.factoriaAltF4.Nesting.models;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    private User user;

    @BeforeEach
    void setUp() {
        user = new User();
    }

    @Test
    void testGettersAndSetters() {
        user.setIduser(1L);
        user.setMail("user@example.com");
        user.setPassword("password");
        user.setStatus(true);
        user.setRegisterDate(new Timestamp(System.currentTimeMillis()));
        user.setUserProfile(new UserProfile());
        user.setRoles(new HashSet<>());

        assertEquals(1L, user.getIduser());
        assertEquals("user@example.com", user.getMail());
        assertEquals("password", user.getPassword());
        assertTrue(user.isStatus());
        assertNotNull(user.getRegisterDate());
        assertNotNull(user.getUserProfile());
        assertNotNull(user.getRoles());
    }

    @Test
    void testEqualsAndHashCode() {
        user.setIduser(1L);
        user.setMail("user@example.com");
        user.setPassword("password");
        user.setStatus(true);
        user.setRegisterDate(new Timestamp(System.currentTimeMillis()));
        user.setUserProfile(new UserProfile());
        user.setRoles(new HashSet<>());

        User sameUser = new User();
        sameUser.setIduser(1L);
        sameUser.setMail("user@example.com");
        sameUser.setPassword("password");
        sameUser.setStatus(true);
        sameUser.setRegisterDate(new Timestamp(System.currentTimeMillis()));
        sameUser.setUserProfile(new UserProfile());
        sameUser.setRoles(new HashSet<>());

        assertEquals(user, sameUser);
        assertEquals(user.hashCode(), sameUser.hashCode());
    }

    @Test
    void testNotEqualsWithDifferentId() {
        user.setIduser(1L);
        user.setMail("user@example.com");
        user.setPassword("password");
        user.setStatus(true);
        user.setRegisterDate(new Timestamp(System.currentTimeMillis()));
        user.setUserProfile(new UserProfile());
        user.setRoles(new HashSet<>());

        User differentId = new User();
        differentId.setIduser(2L); 

        assertNotEquals(user, differentId);
    }

    @Test
    void testNotEqualsWithDifferentMail() {
        user.setIduser(1L);
        user.setMail("user@example.com");
        user.setPassword("password");
        user.setStatus(true);
        user.setRegisterDate(new Timestamp(System.currentTimeMillis()));
        user.setUserProfile(new UserProfile());
        user.setRoles(new HashSet<>());

        User differentMail = new User();
        differentMail.setIduser(1L);
        differentMail.setMail("otheruser@example.com");

        assertNotEquals(user, differentMail);
    }

}
