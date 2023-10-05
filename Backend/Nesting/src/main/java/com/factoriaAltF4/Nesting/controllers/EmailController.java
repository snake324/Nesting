package com.factoriaAltF4.Nesting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.factoriaAltF4.Nesting.services.EmailService;

@RestController
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/sendmail")
    public void sendTestEmail(@RequestParam String to) {
        emailService.sendTestEmail(to);
    }
}
