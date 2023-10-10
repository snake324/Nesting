package com.factoriaAltF4.Nesting.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.repositories.UserProfileRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class UserProfileServiceTest {

  @Mock
  private UserProfileRepository userProfileRepository;

  @InjectMocks
  private UserProfileService userProfileService;

  @BeforeEach
  public void setUp() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  public void testGetAllProfiles() {
    List<UserProfile> mockProfiles = new ArrayList<>();
    when(userProfileRepository.findAll()).thenReturn(mockProfiles);

    List<UserProfile> result = userProfileService.getAllProfiles();

    assertEquals(mockProfiles, result);
  }

  @Test
  public void testGetProfileById() {
    Long profileId = 1L;
    UserProfile mockProfile = new UserProfile();
    mockProfile.setId(profileId);
    when(userProfileRepository.findById(profileId))
      .thenReturn(Optional.of(mockProfile));

    UserProfile result = userProfileService.getProfileById(profileId);

    assertEquals(profileId, result.getId());
  }

  @Test
  public void testAddProfile() {
    UserProfile mockProfile = new UserProfile();
    when(userProfileRepository.save(mockProfile)).thenReturn(mockProfile);

    UserProfile addedProfile = userProfileService.addProfile(mockProfile);

    assertEquals(mockProfile, addedProfile);
  }

  @Test
  public void testUpdateProfile() {
    UserProfile mockProfile = new UserProfile();
    when(userProfileRepository.save(mockProfile)).thenReturn(mockProfile);

    UserProfile updatedProfile = userProfileService.updateProfile(mockProfile);

    assertEquals(mockProfile, updatedProfile);
  }

  @Test
  public void testDeleteProfile() {
    UserProfile mockProfile = new UserProfile();

    userProfileService.deleteProfile(mockProfile);

    verify(userProfileRepository, times(1)).delete(mockProfile);
  }
}
