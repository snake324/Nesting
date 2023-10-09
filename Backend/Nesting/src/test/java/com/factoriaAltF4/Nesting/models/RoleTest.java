package com.factoriaAltF4.Nesting.models;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class RoleTest {

    @Test
    public void testRoleModel() {

        Role role = new Role();
        role.setIdrole(1L);
        role.setRole("ROLE_USER");

        assertEquals(1L, role.getIdrole());
        assertEquals("ROLE_USER", role.getRole());
    }
}
