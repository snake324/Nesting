package com.factoriaAltF4.Nesting.services;

import com.factoriaAltF4.Nesting.models.SecurityUser;
import com.factoriaAltF4.Nesting.models.User;
import com.factoriaAltF4.Nesting.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class JpaUserDetailsServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private JpaUserDetailsService userDetailsService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testLoadUserByUsername() {
        String username = "testuser@example.com";
        User mockUser = new User();
        mockUser.setIduser(1L);
        mockUser.setMail(username);
        mockUser.setPassword("password");
        when(userRepository.findByMail(username)).thenReturn(Optional.of(mockUser));

        SecurityUser securityUser = (SecurityUser) userDetailsService.loadUserByUsername(username);

        assertEquals(username, securityUser.getUsername());
        assertEquals(mockUser.getPassword(), securityUser.getPassword());
    }

    @Test
    public void testLoadUserByUsernameUserNotFound() {
        
        String username = "nonexistentuser@example.com";
        when(userRepository.findByMail(username)).thenReturn(Optional.empty());

        assertThrows(UsernameNotFoundException.class, () -> userDetailsService.loadUserByUsername(username));
    }
}
