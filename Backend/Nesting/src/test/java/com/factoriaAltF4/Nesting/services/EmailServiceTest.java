package com.factoriaAltF4.Nesting.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import static org.mockito.Mockito.*;

public class EmailServiceTest {

    @Mock
    private JavaMailSender javaMailSender;

    @InjectMocks
    private EmailService emailService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSendTestEmail() {
       
        when(javaMailSender.createMimeMessage()).thenReturn(null);
        emailService.sendTestEmail("test@example.com", "Este es un correo de prueba");
        verify(javaMailSender, times(1)).send(any(SimpleMailMessage.class));
    }
}
