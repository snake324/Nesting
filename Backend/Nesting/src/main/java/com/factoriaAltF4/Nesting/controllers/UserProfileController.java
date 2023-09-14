package com.factoriaAltF4.Nesting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.services.UserProfileService;

@RestController
@RequestMapping("/profile")
public class UserProfileController {
    
    @Autowired
    UserProfileService service;

    @GetMapping
    public List<UserProfile> getProfiles(){
        return service.getAllProfiles();
    }

    @GetMapping("/{id}")
    public UserProfile getProfileById(@PathVariable Long id){
        return service.getProfileById(id);
    }

    @PutMapping("/update")
    public UserProfile updateProfile(@RequestBody UserProfile profile){
        return service.updateProfile(profile);
    }

    @DeleteMapping("/delete")
    public void delteProfile(@RequestBody UserProfile profile){
        service.deleteProfile(profile);
    }
}
