package com.factoriaAltF4.Nesting.models;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class EmailResponseTest {

    @Test
    public void testGetMessage() {

        String testMessage = "Este es un mensaje de prueba";
        EmailResponse emailResponse = new EmailResponse(testMessage);

        String resultMessage = emailResponse.getMessage();

        assertEquals(testMessage, resultMessage);
    }

    @Test
    public void testSetMessage() {

        EmailResponse emailResponse = new EmailResponse("");

        String testMessage = "Este es un mensaje de prueba";
        emailResponse.setMessage(testMessage);

        String resultMessage = emailResponse.getMessage();

        assertEquals(testMessage, resultMessage);
    }
}
