package com.factoriaAltF4.Nesting.models;

import java.security.Timestamp;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long user_id;

    @Column(name = "mail")
    public String mail;

    @Column(name = "password")
    private String password;

    @Column(name = "status")
    public boolean status;

    @Column(name="register_date")
    public Timestamp registerDate;

    @OneToOne(mappedBy = "user")
    private UserProfile userProfile;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "roles_users", joinColumns = @JoinColumn(name="user_id"), inverseJoinColumns = @JoinColumn(name="roles_id"))
    private Set<Role> roles;

}
