package com.factoriaAltF4.Nesting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaAltF4.Nesting.models.User;
import com.factoriaAltF4.Nesting.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    UserService service;

    @GetMapping
    public List<User> getAllUsers(){
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return service.getUserById(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable Long id){
        User userToUpdate = service.getUserById(id);
        service.updateUser(userToUpdate);
        return ResponseEntity.ok(userToUpdate);
    }

    @DeleteMapping
    public void deleteUser(@RequestBody User user){
        service.deleteUser(user);
    }

    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<User> updateStatus(@PathVariable Long id, @RequestParam boolean newStatus){
        User updatedUser = service.updateStatus(id, newStatus);
        return ResponseEntity.ok(updatedUser);
    }

}
