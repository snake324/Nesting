package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long users_id;

    @Column(name = "mail")
    public String mail;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    public String role;

    @OneToOne(mappedBy = "user")
    private UserProfile userProfile;


}
