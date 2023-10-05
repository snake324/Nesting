package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.factoriaAltF4.Nesting.controllers.UserController;
import com.factoriaAltF4.Nesting.models.User;
import com.factoriaAltF4.Nesting.services.UserService;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

class UserControllerTest {

  @InjectMocks
  private UserController userController;

  @Mock
  private UserService userService;

  @BeforeEach
  void init() {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  void testGetAllUsers() {
    List<User> mockUsers = new ArrayList<>();
    when(userService.getAllUsers()).thenReturn(mockUsers);

    List<User> result = userController.getAllUsers();

    assertEquals(mockUsers, result);
    verify(userService, times(1)).getAllUsers();
  }

  @Test
  void testGetUserById() {
    Long userId = 1L;
    User mockUser = new User();
    when(userService.getUserById(userId)).thenReturn(mockUser);

    User result = userController.getUserById(userId);
    assertEquals(mockUser, result);
    verify(userService, times(1)).getUserById(userId);
  }

  @Test
  void testUpdateUser() {
    Long userId = 1L;
    User mockUser = new User();
    when(userService.getUserById(userId)).thenReturn(mockUser);
    ResponseEntity<User> responseEntity = userController.updateUser(
      mockUser,
      userId
    );
    assertEquals(ResponseEntity.ok(mockUser), responseEntity);
    verify(userService, times(1)).getUserById(userId);
    verify(userService, times(1)).updateUser(mockUser);
  }

  @Test
  void testDeleteUser() {
    Long userId = 1L;
    User mockUser = new User();
    when(userService.getUserById(userId)).thenReturn(mockUser);
    userController.deleteUser(mockUser, userId);
    verify(userService, times(1)).deleteUser(mockUser, userId);
  }

  @Test
  void testUpdateStatus() {
    Long userId = 1L;
    boolean newStatus = true;
    User mockUser = new User();
    when(userService.updateStatus(userId, newStatus)).thenReturn(mockUser);
    ResponseEntity<User> responseEntity = userController.updateStatus(
      userId,
      newStatus
    );
    assertEquals(ResponseEntity.ok(mockUser), responseEntity);
    verify(userService, times(1)).updateStatus(userId, newStatus);
  }

  @Test
  void testGetUserId() {
    String userEmail = "test@example.com";
    Long mockUserId = 1L;
    when(userService.getUserId(userEmail)).thenReturn(mockUserId);
    Long result = userController.getUserId(userEmail);
    assertEquals(mockUserId, result);
    verify(userService, times(1)).getUserId(userEmail);
  }
}
