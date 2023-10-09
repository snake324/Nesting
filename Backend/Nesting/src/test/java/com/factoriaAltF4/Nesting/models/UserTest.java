// package com.factoriaAltF4.Nesting.models;


// import com.factoriaAltF4.Nesting.models.User;
// import com.factoriaAltF4.Nesting.models.UserProfile;
// import com.factoriaAltF4.Nesting.models.Role;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// import java.sql.Timestamp;
// import java.util.HashSet;
// import java.util.Set;

// import static org.junit.jupiter.api.Assertions.assertEquals;
// import static org.junit.jupiter.api.Assertions.assertNotNull;
// import static org.junit.jupiter.api.Assertions.assertTrue;
// import static org.mockito.Mockito.mock;

// public class UserTest {

//     private User user;
//     private UserProfile userProfile;
//     private Set<Role> roles;

//     @BeforeEach
//     public void setUp() {
//         // Crear un objeto UserProfile
//         userProfile = new UserProfile();
//         userProfile.setName("John");
//         // userProfile.setLastName("Doe");

//         // Crear un conjunto de roles
//         roles = new HashSet<>();
//         Role role1 = new Role();
//         role1.setIdrole(1L);
//         role1.setRole("ROLE_USER");

//         Role role2 = new Role();
//         role2.setIdrole(2L);
//         role2.setRole("ROLE_ADMIN");

//         roles.add(role1);
//         roles.add(role2);

//         // Crear un objeto User
//         user = new User();
//         user.setIduser(1L);
//         user.setMail("test@example.com");
//         user.setPassword("password");
//         user.setStatus(true);
//         user.setRegisterDate(new Timestamp(System.currentTimeMillis()));
//         user.setUserProfile(userProfile);
//         user.setRoles(roles);
//     }

//     @Test
//     public void testUserModel() {
//         // Verificar que los atributos se hayan configurado correctamente
//         assertEquals(1L, user.getIduser());
//         assertEquals("test@example.com", user.getMail());
//         assertEquals("password", user.getPassword());
//         assertTrue(user.isStatus());
//         assertNotNull(user.getRegisterDate());
//         assertEquals(userProfile, user.getUserProfile());
//         assertEquals(roles, user.getRoles());
//     }

//     @Test
//     public void testPasswordEncryption() {
//         // Verificar que la contraseña se haya encriptado correctamente
//         BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//         assertTrue(passwordEncoder.matches("password", user.getPassword()));
//     }
// }
