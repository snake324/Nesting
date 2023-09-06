package com.factoriaAltF4.Nesting.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cards")
@Data
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "owner")
    private String owner;

    @Column(name = "number")
    private String number;

    @Column(name = "expdate")
    private String expdate;

    @Column(name = "cvv")
    private String cvv;

    @OneToOne
    @JoinColumn(name = "user_profile_id")
    @JsonIgnore
    private UserProfile userProfile; 
}
