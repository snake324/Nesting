
// package com.factoriaAltF4.Nesting.services;

// import com.factoriaAltF4.Nesting.models.Contacts;
// import com.factoriaAltF4.Nesting.models.Property;
// import com.factoriaAltF4.Nesting.models.UserProfile;
// import com.factoriaAltF4.Nesting.repositories.ContactsRepository;
// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.MockitoAnnotations;

// import java.sql.Timestamp;

// import static org.mockito.Mockito.*;

// public class ContactServiceTest {

//     @Mock
//     private ContactsRepository contactsRepository;

//     @InjectMocks
//     private ContactService contactService;

//     @Test
//     public void testSomeMethodThatUsesContactsEntity() {
//         // Simular el comportamiento del repositorio de Contacts
//         Property property = new Property();
//         property.setId(1L);
//         UserProfile profile = new UserProfile();
//         profile.setId(2L);
//         Contacts contacts = new Contacts();
//         contacts.setProperty(property);
//         contacts.setProfile(profile);
//         when(contactsRepository.save(any(Contacts.class))).thenReturn(contacts);

//         // Llamar a un método en ContactService que utiliza la entidad Contacts
//         Contacts savedContacts = contactService.someMethodThatUsesContactsEntity(property, profile);

//         // Verificar que se llama al método de guardado en el repositorio
//         verify(contactsRepository, times(1)).save(any(Contacts.class));

//         // Realizar las aserciones necesarias según la lógica de tu servicio
//         // por ejemplo, puedes verificar que savedContacts no sea nulo y contenga las FKs correctamente.
//     }
// }
