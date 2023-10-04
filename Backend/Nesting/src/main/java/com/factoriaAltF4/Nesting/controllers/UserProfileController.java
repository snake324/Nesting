package com.factoriaAltF4.Nesting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.services.UserProfileService;

@RestController
@RequestMapping("/profile")
public class UserProfileController {
    
    @Autowired
    UserProfileService service;

    @GetMapping("/{id}")
    public ResponseEntity<UserProfile> getProfileById(@PathVariable Long id){
        UserProfile profile = service.getProfileById(id);
        if (profile != null) {
            return ResponseEntity.ok(profile);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserProfile> updateProfile(@PathVariable Long id, @RequestBody UserProfile updatedProfile){
        UserProfile existingProfile = service.getProfileById(id);

        if (existingProfile != null) {
            existingProfile.setName(updatedProfile.getName());
            existingProfile.setLastname(updatedProfile.getLastname());
            existingProfile.setAddress(updatedProfile.getAddress());

            UserProfile savedProfile = service.updateProfile(existingProfile);
            return ResponseEntity.ok(savedProfile);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id){
        UserProfile profile = service.getProfileById(id);
        if (profile != null) {
            service.deleteProfile(profile);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

