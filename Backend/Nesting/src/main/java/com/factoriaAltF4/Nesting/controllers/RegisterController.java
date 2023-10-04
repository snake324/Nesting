package com.factoriaAltF4.Nesting.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaAltF4.Nesting.models.User;
import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.services.UserProfileService;
import com.factoriaAltF4.Nesting.services.UserService;

@RestController
@RequestMapping("/register")
public class RegisterController {

    private final UserService userService;
    private final UserProfileService profileService;

    public RegisterController(UserService userService, UserProfileService profileService) {
        this.userService = userService;
        this.profileService = profileService;
    }

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) throws Throwable {
        User savedUser = userService.addUser(user);

        UserProfile userProfile = new UserProfile();
        userProfile.setUser(savedUser);

        UserProfile savedProfile = profileService.addProfile(userProfile);

        savedUser.setUserProfile(savedProfile);
        userService.updateUser(savedUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
}
