package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;

@Entity
@Table(name = "cards")
public class Cards {

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

    @ManyToOne
    @JoinColumn(name = "user_profile_id") 
    private UsersProfile userProfile; 

    public Cards() {
    }

    public Cards(String owner, String number, String expdate, String cvv, UsersProfile userProfile) {
        this.owner = owner;
        this.number = number;
        this.expdate = expdate;
        this.cvv = cvv;
        this.userProfile = userProfile;
    }}
