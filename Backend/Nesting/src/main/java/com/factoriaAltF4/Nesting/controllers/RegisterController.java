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

    UserService service;
    UserProfileService profileService;

    public RegisterController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) throws Throwable {
        User savedUser = service.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @PostMapping("/profile")
    public ResponseEntity<UserProfile> addProfile(@RequestBody UserProfile profile) throws Throwable {
        UserProfile profileToSave = profileService.addProfile(profile);
        return ResponseEntity.status(HttpStatus.CREATED).body(profileToSave);
    }
}