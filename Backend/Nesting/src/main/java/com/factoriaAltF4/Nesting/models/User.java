package com.factoriaAltF4.Nesting.models;

import java.sql.Timestamp;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long iduser;

    @Column(name = "mail")
    public String mail;

    @Column(name = "password")
    public String password;

    @Column(name = "status")
    public boolean status;

    @Column(name="register_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    public Timestamp registerDate;

    @OneToOne(mappedBy = "user")
    private UserProfile userProfile;

    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "roles_users", joinColumns = @JoinColumn(name="user_id"), inverseJoinColumns = @JoinColumn(name="roles_id"))
    @JsonIgnore
    public Set<Role> roles;
    
}
