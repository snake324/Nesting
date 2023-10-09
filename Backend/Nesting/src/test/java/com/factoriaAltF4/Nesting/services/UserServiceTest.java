package com.factoriaAltF4.Nesting.services;

import com.factoriaAltF4.Nesting.models.Role;
import com.factoriaAltF4.Nesting.models.User;
import com.factoriaAltF4.Nesting.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

// import java.sql.Timestamp;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private RoleService roleService;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllUsers() {
        // Simular el comportamiento del repositorio
        List<User> mockUsers = new ArrayList<>();
        when(userRepository.findAll()).thenReturn(mockUsers);

        // Llamar al servicio para obtener todos los usuarios
        List<User> result = userService.getAllUsers();

        // Verificar que el servicio devuelve la lista de usuarios del repositorio
        assertEquals(mockUsers, result);
    }

    @Test
    public void testGetUserId() {
        // Simular el comportamiento del repositorio
        String userMail = "testuser@example.com";
        Long userId = 1L;
        User mockUser = new User();
        mockUser.setIduser(userId);
        when(userRepository.findByMail(userMail)).thenReturn(Optional.of(mockUser));

        // Llamar al servicio para obtener el ID de un usuario por su correo
        Long result = userService.getUserId(userMail);

        // Verificar que el servicio devuelve el ID correcto
        assertEquals(userId, result);
    }

    @Test
    public void testGetUserById() {
        // Simular el comportamiento del repositorio
        Long userId = 1L;
        User mockUser = new User();
        mockUser.setIduser(userId);
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));

        // Llamar al servicio para obtener un usuario por su ID
        User result = userService.getUserById(userId);

        // Verificar que el servicio devuelve el usuario correcto
        assertEquals(userId, result.getIduser());
    }

    @Test
    public void testAssignDefaultRole() throws Throwable {
        // Simular el comportamiento del servicio RoleService
        Role mockRole = new Role();
        mockRole.setIdrole(2L);
        when(roleService.getRoleById(2L)).thenReturn(mockRole);

        // Crear un usuario y asignarle el rol por defecto
        User user = new User();
        userService.assignDefaultRole(user);

        // Verificar que el usuario tiene el rol asignado correctamente
        Set<Role> roles = user.getRoles();
        assertNotNull(roles);
        assertEquals(1, roles.size());
        assertTrue(roles.contains(mockRole));
    }

    // @Test
    // public void testAddUser() throws Throwable {
    // // Simular el comportamiento del repositorio y del servicio RoleService
    // Role mockRole = new Role();
    // mockRole.setIdrole(2L);
    // when(roleService.getRoleById(2L)).thenReturn(mockRole);
    // when(userRepository.save(any(User.class))).thenAnswer(invocation ->
    // invocation.getArgument(0));

    // // Crear un usuario y agregarlo
    // User user = new User();
    // user.setPassword("password");
    // User addedUser = userService.addUser(user);

    // // Verificar que el usuario se agrega correctamente
    // assertNotNull(addedUser);
    // assertNotNull(addedUser.getPassword());
    // assertTrue(addedUser.getRegisterDate() instanceof Timestamp);

    // // Verificar que se llama al método de asignación de rol por defecto
    // verify(userService, times(1)).assignDefaultRole(addedUser);
    // }

    @Test
    public void testUpdateUser() {

        User mockUser = new User();
        when(userRepository.save(mockUser)).thenReturn(mockUser);

        User updatedUser = userService.updateUser(mockUser);

        assertEquals(mockUser, updatedUser);
    }

    @Test
    public void testDeleteUser() {

        Long userId = 1L;
        User mockUser = new User();
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));

        userService.deleteUser(mockUser, userId);

        verify(userRepository, times(1)).delete(mockUser);
    }

    @Test
    public void testUpdateStatus() {

        Long userId = 1L;
        User mockUser = new User();
        mockUser.setIduser(userId);
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));
        when(userRepository.save(mockUser)).thenReturn(mockUser);

        User updatedUser = userService.updateStatus(userId, true);

        assertTrue(updatedUser.isStatus());
    }
}
