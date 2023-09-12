package com.factoriaAltF4.Nesting.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.factoriaAltF4.Nesting.models.User;

public interface UserRepository extends JpaRepository<User,Long>{
    
    Optional<User> findBymail(String mail);

}
