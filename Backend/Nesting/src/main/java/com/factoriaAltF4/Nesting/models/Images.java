package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;

@Entity
@Table(name = "images")
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "img")
    private String img;

    @ManyToOne
    @JoinColumn(name = "properties_id")
    private Properties property;

    public Images() {
    }

    public Images(String img, Properties property) {
        this.img = img;
        this.property = property;
    }}
