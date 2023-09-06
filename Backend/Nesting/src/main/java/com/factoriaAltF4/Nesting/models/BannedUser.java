package com.factoriaAltF4.Nesting.models;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "banned_users")
@Data
public class BannedUser {

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
}
