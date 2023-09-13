package com.factoriaAltF4.Nesting.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.repositories.UserProfileRepository;

@Service
public class UserProfileService {

    @Autowired
    UserProfileRepository repo;

    public List<UserProfile> getAllProfiles() {
        return repo.findAll();
    }

    public UserProfile getProfileById(Long id) {
        Optional<UserProfile> opt = repo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    public UserProfile addProfile(UserProfile profile) {
        return repo.save(profile);
    }

    public UserProfile updateProfile(UserProfile profile) {
        return repo.save(profile);
    }

    public void deleteProfile(UserProfile profile) {
        repo.delete(profile);
    }

}
