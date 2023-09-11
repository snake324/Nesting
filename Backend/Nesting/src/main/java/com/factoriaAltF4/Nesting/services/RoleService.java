package com.factoriaAltF4.Nesting.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaAltF4.Nesting.models.Role;
import com.factoriaAltF4.Nesting.repositories.RoleRepository;

@Service
public class RoleService {
    
    @Autowired
    RoleRepository repo;

    public List<Role> getAllRoles(){
        return repo.findAll();
    }

    public Role getRoleById(Long id){
         Optional<Role> opt = repo.findById(id);
        if(opt.isPresent()){
            return opt.get();
        }else{
            return null;
        }
    }

}