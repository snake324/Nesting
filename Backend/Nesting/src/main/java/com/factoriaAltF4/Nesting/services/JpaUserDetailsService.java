package com.factoriaAltF4.Nesting.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.factoriaAltF4.Nesting.models.SecurityUser;
import com.factoriaAltF4.Nesting.repositories.UserRepository;

@Service
public class JpaUserDetailsService implements UserDetailsService{

    UserRepository repo;

    public JpaUserDetailsService(UserRepository repo){
        this.repo = repo;
    }

   @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repo.findByMail(username).map(SecurityUser::new).orElseThrow(()-> new UsernameNotFoundException("User not found"+ username));
    }
    
}