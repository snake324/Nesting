package com.factoriaAltF4.Nesting.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CardTest {

  private Card card;

  @BeforeEach
  void setUp() {
    card = new Card();
    card.setId(1L);
    card.setOwner("Manolo");
    card.setSurname("Garcia Jimenez");
    card.setNumber("1234567890123456");
    card.setExpiremonth("11");
    card.setExpireyear("2023");
  }

  @Test
  void testGettersAndSetters() {
    assertEquals(1L, card.getId());
    assertEquals("Manolo", card.getOwner());
    assertEquals("Garcia Jimenez", card.getSurname());
    assertEquals("1234567890123456", card.getNumber());
    assertEquals("11", card.getExpiremonth());
    assertEquals("2023", card.getExpireyear());
  }

  @Test
  void testEqualsAndHashCode() {
    Card anotherCard = new Card();
    anotherCard.setId(1L);
    anotherCard.setOwner("Manolo");
    anotherCard.setSurname("Garcia Jimenez");
    anotherCard.setNumber("1234567890123456");
    anotherCard.setExpiremonth("11");
    anotherCard.setExpireyear("2023");

    assertTrue(card.equals(anotherCard));
    assertEquals(card.hashCode(), anotherCard.hashCode());
  }

  @Test
  void testEqualsWithDifferentId() {
    Card anotherCard = new Card();
    anotherCard.setId(2L);
    anotherCard.setOwner("Pepa");
    anotherCard.setSurname("Perez Pepita");
    anotherCard.setNumber("1234567890123456");
    anotherCard.setExpiremonth("12");
    anotherCard.setExpireyear("2023");

    assertFalse(card.equals(anotherCard));
  }

  @Test
  void testEqualsWithNull() {
    assertFalse(card.equals(null));
  }

  @Test
  void testConstructor() {
    Card newCard = new Card();
    assertNull(newCard.getId());
    assertNull(newCard.getOwner());
    assertNull(newCard.getSurname());
    assertNull(newCard.getNumber());
    assertNull(newCard.getExpiremonth());
    assertNull(newCard.getExpireyear());
    assertNull(newCard.getUserProfile());
  }

  @Test
  void testSetUserProfile() {
    UserProfile userProfile = new UserProfile();
    card.setUserProfile(userProfile);
    assertEquals(userProfile, card.getUserProfile());
  }

  @Test
  void testHashCodeConsistency() {
    int initialHashCode = card.hashCode();
    assertEquals(initialHashCode, card.hashCode());
  }

  @Test
  void testNotEqualsWithDifferentClass() {
    assertFalse(card.equals("This is a String"));
  }

  @Test
  void testNotEqualsWithDifferentType() {
    assertFalse(card.equals(new UserProfile()));
  }
}
