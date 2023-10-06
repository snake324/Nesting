package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import com.factoriaAltF4.Nesting.models.User;
import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.services.UserProfileService;
import com.factoriaAltF4.Nesting.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

class RegisterControllerTest {

  @InjectMocks
  private RegisterController registerController;

  @Mock
  private UserService userService;

  @Mock
  private UserProfileService profileService;

  @BeforeEach
  void init() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void testAddUser() throws Throwable {
    User mockUser = new User();
    UserProfile mockProfile = new UserProfile();
    mockUser.setUserProfile(mockProfile);
    when(userService.addUser(any(User.class))).thenReturn(mockUser);
    when(profileService.addProfile(any(UserProfile.class)))
      .thenReturn(mockProfile);
    ResponseEntity<User> responseEntity = registerController.addUser(mockUser);

    assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
    User responseBody = responseEntity.getBody();
    assertEquals(mockUser, responseBody);

    verify(userService, times(1)).addUser(mockUser);
    verify(profileService, times(1)).addProfile(any(UserProfile.class));
    verify(userService, times(1)).updateUser(mockUser);
  }
}
