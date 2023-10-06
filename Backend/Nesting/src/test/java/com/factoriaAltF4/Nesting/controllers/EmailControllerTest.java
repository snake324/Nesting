package com.factoriaAltF4.Nesting.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import com.factoriaAltF4.Nesting.models.EmailResponse;
import com.factoriaAltF4.Nesting.services.EmailService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

class EmailControllerTest {

  @InjectMocks
  private EmailController emailController;

  @Mock
  private EmailService emailService;

  @BeforeEach
  void init() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void testSendTestEmail() {
    String to = "test@example.com";
    String body = "Test email body";
    ResponseEntity<EmailResponse> responseEntity = emailController.sendTestEmail(
      to,
      body
    );
    assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    EmailResponse responseBody = responseEntity.getBody();
    assertEquals("Correo enviado exitosamente", responseBody.getMessage());
    verify(emailService, times(1)).sendTestEmail(to, body);
  }
}
