package com.factoriaAltF4.Nesting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.factoriaAltF4.Nesting.models.UserProfile;

public interface UserProfileRepository extends JpaRepository<UserProfile,Long>{
    
}
