package com.factoriaAltF4.Nesting.models;

import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users_profiles")
@Data
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "address")
    private String address;

    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @OneToOne(mappedBy = "userProfile")
    public Card card;

    // @ManyToMany(mappedBy = "userProfiles")
    // public List<Property> propertiesContact;

    @OneToMany(mappedBy = "profile")
    public Set<Contacts> profilContacts;

    @OneToMany(mappedBy = "profilePublished")
    public List<Property> propertiesPublished;
}
