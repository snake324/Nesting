package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@NoArgsConstructor


public class Users {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long users_id;

    @Column(name = "mail")
    public String mail;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    public String role;

    public Users(String mail, String password, String role) {
        this.mail = mail;
        this.password = password;
        this.role = role;
    }


}
