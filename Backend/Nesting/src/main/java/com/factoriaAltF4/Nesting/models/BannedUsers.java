package com.factoriaAltF4.Nesting.models;


import jakarta.persistence.*;

@Entity
@Table(name = "banned_users")
public class BannedUsers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;

    public BannedUsers() {
    }

    public BannedUsers(String email, String password, String role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }}
