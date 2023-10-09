package com.factoriaAltF4.Nesting.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class SecurityUserTest {

    private User user;

    @BeforeEach
    public void setUp() {

        user = mock(User.class);

        Role role1 = new Role();
        role1.setRole("ROLE_USER");

        Role role2 = new Role();
        role2.setRole("ROLE_ADMIN");

        Set<Role> roles = new HashSet<>();
        roles.add(role1);
        roles.add(role2);

        when(user.getRoles()).thenReturn(roles);
        when(user.getPassword()).thenReturn("password");
        when(user.getMail()).thenReturn("test@example.com");
    }

    @Test
    public void testSecurityUser() {

        SecurityUser securityUser = new SecurityUser(user);

        Collection<? extends GrantedAuthority> authorities = securityUser.getAuthorities();
        assertEquals(2, authorities.size());

        assertTrue(authorities.contains(new SimpleGrantedAuthority("ROLE_USER")));
        assertTrue(authorities.contains(new SimpleGrantedAuthority("ROLE_ADMIN")));

        assertEquals("password", securityUser.getPassword());
        assertEquals("test@example.com", securityUser.getUsername());
        assertTrue(securityUser.isAccountNonExpired());
        assertTrue(securityUser.isAccountNonLocked());
        assertTrue(securityUser.isCredentialsNonExpired());
        assertTrue(securityUser.isEnabled());
    }
}
