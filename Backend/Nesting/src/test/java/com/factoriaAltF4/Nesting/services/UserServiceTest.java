package com.factoriaAltF4.Nesting.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.factoriaAltF4.Nesting.models.Role;
import com.factoriaAltF4.Nesting.models.User;
import com.factoriaAltF4.Nesting.repositories.UserRepository;
import java.sql.Timestamp;
import java.util.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

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
    List<User> mockUsers = new ArrayList<>();
    when(userRepository.findAll()).thenReturn(mockUsers);

    List<User> result = userService.getAllUsers();

    assertEquals(mockUsers, result);
  }

  @Test
  public void testGetUserId() {
    String userMail = "testuser@example.com";
    Long userId = 1L;
    User mockUser = new User();
    mockUser.setIduser(userId);
    when(userRepository.findByMail(userMail)).thenReturn(Optional.of(mockUser));

    Long result = userService.getUserId(userMail);

    assertEquals(userId, result);
  }

  @Test
  public void testGetUserById() {
    Long userId = 1L;
    User mockUser = new User();
    mockUser.setIduser(userId);
    when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));

    User result = userService.getUserById(userId);

    assertEquals(userId, result.getIduser());
  }

  @Test
  public void testAssignDefaultRole() throws Throwable {
    Role mockRole = new Role();
    mockRole.setIdrole(2L);
    when(roleService.getRoleById(2L)).thenReturn(mockRole);

    User user = new User();
    userService.assignDefaultRole(user);

    Set<Role> roles = user.getRoles();
    assertNotNull(roles);
    assertEquals(1, roles.size());
    assertTrue(roles.contains(mockRole));
  }

  @Test
  public void testAddUser() throws Throwable {
    Role mockRole = new Role();
    mockRole.setIdrole(2L);
    when(roleService.getRoleById(2L)).thenReturn(mockRole);
    when(userRepository.save(any(User.class)))
      .thenAnswer(invocation -> invocation.getArgument(0));

    User user = new User();
    user.setPassword("password");
    User addedUser = userService.addUser(user);

    assertNotNull(addedUser);
    assertNotNull(addedUser.getPassword());
    assertTrue(addedUser.getRegisterDate() instanceof Timestamp);

    verify(roleService, times(1)).getRoleById(2L);
  }

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
