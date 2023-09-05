package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;

@Entity
@Table(name = "users_profiles")
public class UsersProfile {

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

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    

    public UsersProfile() {
    }

    public UsersProfile(String name, String lastname, String address, Users user) {
        this.name = name;
        this.lastname = lastname;
        this.address = address;
        this.user = user;
    }}
