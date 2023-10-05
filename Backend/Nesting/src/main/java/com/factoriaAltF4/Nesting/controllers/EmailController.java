package com.factoriaAltF4.Nesting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.factoriaAltF4.Nesting.services.EmailService;
import com.factoriaAltF4.Nesting.models.EmailResponse;

@RestController
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/sendmail")
    public ResponseEntity<EmailResponse> sendTestEmail(@RequestParam String to, @RequestParam String body) {
        emailService.sendTestEmail(to, body); // Proporciona ambos parámetros
        return ResponseEntity.status(HttpStatus.OK).body(new EmailResponse("Correo enviado exitosamente"));
    }
}
