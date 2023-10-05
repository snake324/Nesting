package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.*;

import com.factoriaAltF4.Nesting.controllers.UserProfileController;
import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.services.UserProfileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

class UserProfileControllerTest {

  @InjectMocks
  private UserProfileController userProfileController;

  @Mock
  private UserProfileService userProfileService;

  @BeforeEach
  void init() {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  void testGetProfileByIdFound() {
    Long profileId = 1L;
    UserProfile mockProfile = new UserProfile();
    when(userProfileService.getProfileById(profileId)).thenReturn(mockProfile);

    ResponseEntity<UserProfile> responseEntity = userProfileController.getProfileById(
      profileId
    );

    assertEquals(ResponseEntity.ok(mockProfile), responseEntity);
    verify(userProfileService, times(1)).getProfileById(profileId);
  }

  @Test
  void testGetProfileByIdNotFound() {
    Long profileId = 1L;
    when(userProfileService.getProfileById(profileId)).thenReturn(null);

ResponseEntity<UserProfile> responseEntity = userProfileController.getProfileById(
      profileId
    );
assertEquals(ResponseEntity.notFound().build(), responseEntity);
    verify(userProfileService, times(1)).getProfileById(profileId);
  }

  @Test
  void testUpdateProfileFound() {
    Long profileId = 1L;
    UserProfile existingProfile = new UserProfile();
    UserProfile updatedProfile = new UserProfile();
    updatedProfile.setName("UpdatedName");
    updatedProfile.setLastname("UpdatedLastname");
    updatedProfile.setAddress("UpdatedAddress");

    when(userProfileService.getProfileById(profileId))
      .thenReturn(existingProfile);
    when(userProfileService.updateProfile(existingProfile))
      .thenReturn(updatedProfile);

    ResponseEntity<UserProfile> responseEntity = userProfileController.updateProfile(
      profileId,
      updatedProfile
    );

    assertEquals(ResponseEntity.ok(updatedProfile), responseEntity);
    assertEquals("UpdatedName", existingProfile.getName());
    assertEquals("UpdatedLastname", existingProfile.getLastname());
    assertEquals("UpdatedAddress", existingProfile.getAddress());
    verify(userProfileService, times(1)).getProfileById(profileId);
    verify(userProfileService, times(1)).updateProfile(existingProfile);
  }

  @Test
  void testUpdateProfileNotFound() {
    Long profileId = 1L;
    UserProfile updatedProfile = new UserProfile();

    when(userProfileService.getProfileById(profileId)).thenReturn(null);

    ResponseEntity<UserProfile> responseEntity = userProfileController.updateProfile(
      profileId,
      updatedProfile
    );

    assertEquals(ResponseEntity.notFound().build(), responseEntity);
    verify(userProfileService, times(1)).getProfileById(profileId);
    verify(userProfileService, never()).updateProfile(any(UserProfile.class));
  }

  @Test
  void testDeleteProfileFound() {
    Long profileId = 1L;
    UserProfile mockProfile = new UserProfile();
    when(userProfileService.getProfileById(profileId)).thenReturn(mockProfile);

    ResponseEntity<Void> responseEntity = userProfileController.deleteProfile(
      profileId
    );

    assertEquals(ResponseEntity.noContent().build(), responseEntity);
    verify(userProfileService, times(1)).getProfileById(profileId);
    verify(userProfileService, times(1)).deleteProfile(mockProfile);
  }

  @Test
  void testDeleteProfileNotFound() {
    Long profileId = 1L;
    when(userProfileService.getProfileById(profileId)).thenReturn(null);

    ResponseEntity<Void> responseEntity = userProfileController.deleteProfile(
      profileId
    );

    assertEquals(ResponseEntity.notFound().build(), responseEntity);
    verify(userProfileService, times(1)).getProfileById(profileId);
    verify(userProfileService, never()).deleteProfile(any(UserProfile.class));
  }
}
