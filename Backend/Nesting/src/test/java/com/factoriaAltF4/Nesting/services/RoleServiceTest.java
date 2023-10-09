package com.factoriaAltF4.Nesting.services;

import com.factoriaAltF4.Nesting.models.Role;
import com.factoriaAltF4.Nesting.repositories.RoleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class RoleServiceTest {

    @Mock
    private RoleRepository roleRepository;

    @InjectMocks
    private RoleService roleService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllRoles() {

        List<Role> mockRoles = new ArrayList<>();
        when(roleRepository.findAll()).thenReturn(mockRoles);

        List<Role> result = roleService.getAllRoles();

        assertEquals(mockRoles, result);
    }

    @Test
    public void testGetRoleById() {

        Long roleId = 1L;
        Role mockRole = new Role();
        mockRole.setIdrole(roleId);
        when(roleRepository.findById(roleId)).thenReturn(Optional.of(mockRole));

        Role result = roleService.getRoleById(roleId);

        assertEquals(roleId, result.getIdrole());
    }

    @Test
    public void testGetRoleByIdRoleNotFound() {

        Long roleId = 1L;
        when(roleRepository.findById(roleId)).thenReturn(Optional.empty());

        Role result = roleService.getRoleById(roleId);

        assertNull(result);
    }
}
