package com.factoriaAltF4.Nesting.controllers;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.servlet.http.HttpSession;
import com.factoriaAltF4.Nesting.services.UserService; // Importa el servicio de usuario

@RestController
public class AuthController {
    
    @Autowired
    private UserService userService;

    @PostMapping(path = "/login")
    public ResponseEntity<Map<String, String>> login(HttpSession session) {
        System.out.println("Received login request");
        SecurityContext contextHolder = SecurityContextHolder.getContext();
        Authentication auth = contextHolder.getAuthentication();
        System.out.println("User status: " + userService.getUserStatus(auth.getName()));
        String username = auth.getName();
        boolean userStatus = userService.getUserStatus(username);

        if (!userStatus) {
            Map<String, String> errorJson = new HashMap<>();
            errorJson.put("message", "Cuenta desactivada. No puedes iniciar sesión.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorJson);
        }

        Map<String, String> json = new HashMap<>();
        json.put("message", "Logged");
        json.put("username", username);
        json.put("roles", auth.getAuthorities().iterator().next().toString());
        json.put("jsessionid", session.getId());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(json);
    }
}
