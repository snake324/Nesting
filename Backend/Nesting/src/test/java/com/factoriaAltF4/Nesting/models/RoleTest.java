package com.factoriaAltF4.Nesting.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class RoleTest {

    private Role role;

    @BeforeEach
    void setUp() {
        role = new Role();
    }

    @Test
    void testGettersAndSetters() {
        role.setIdrole(1L);
        role.setRole("ROLE_USER");
        role.setUsers(new ArrayList<>());

        assertEquals(1L, role.getIdrole());
        assertEquals("ROLE_USER", role.getRole());
        assertNotNull(role.getUsers());
    }

    @Test
    void testEqualsAndHashCode() {
        role.setIdrole(1L);
        role.setRole("ROLE_USER");
        role.setUsers(new ArrayList<>());

        Role sameRole = new Role();
        sameRole.setIdrole(1L);
        sameRole.setRole("ROLE_USER");
        sameRole.setUsers(new ArrayList<>());

        assertEquals(role, sameRole);
        assertEquals(role.hashCode(), sameRole.hashCode());
    }

    @Test
    void testNotEqualsWithDifferentId() {
        role.setIdrole(1L);
        role.setRole("ROLE_USER");
        role.setUsers(new ArrayList<>());

        Role differentId = new Role();
        differentId.setIdrole(2L);

        assertNotEquals(role, differentId);
    }

    @Test
    void testNotEqualsWithDifferentRole() {
        role.setIdrole(1L);
        role.setRole("ROLE_USER");
        role.setUsers(new ArrayList<>());

        Role differentRole = new Role();
        differentRole.setIdrole(1L);
        differentRole.setRole("ROLE_ADMIN"); 

        assertNotEquals(role, differentRole);
    }
}
