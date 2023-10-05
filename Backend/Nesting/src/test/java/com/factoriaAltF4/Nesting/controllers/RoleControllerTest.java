package com.factoriaAltF4.Nesting.controllers;

import com.factoriaAltF4.Nesting.controllers.RoleController;
import com.factoriaAltF4.Nesting.models.Role;
import com.factoriaAltF4.Nesting.services.RoleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class RoleControllerTest {

    @InjectMocks
    private RoleController roleController;

    @Mock
    private RoleService roleService;

    @BeforeEach
    void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllRoles() {
        
        List<Role> mockRoles = new ArrayList<>();
        when(roleService.getAllRoles()).thenReturn(mockRoles);
List<Role> result = roleController.getAllRoles();
assertEquals(mockRoles, result);
        verify(roleService, times(1)).getAllRoles();
    }

    @Test
    void testGetRoleById() {
      
        Long roleId = 1L;
        Role mockRole = new Role();
        when(roleService.getRoleById(roleId)).thenReturn(mockRole);
Role result = roleController.getRoleById(roleId);
assertEquals(mockRole, result);
        verify(roleService, times(1)).getRoleById(roleId);
    }
}