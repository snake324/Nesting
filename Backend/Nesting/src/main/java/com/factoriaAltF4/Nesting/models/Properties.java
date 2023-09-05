package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "properties")
public class Properties {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description", length = 3000)
    private String description;

    @Column(name = "publish_date")
    private LocalDate publishDate;

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private Integer postalCode;

    @Column(name = "rooms")
    private Integer rooms;

    @Column(name = "baths")
    private Integer baths;

    @Column(name = "size")
    private Integer size; 

    @Column(name = "price")
    private Integer price; 

    public Properties() {
    }

    public Properties(String title, String description, LocalDate publishDate, String city, Integer postalCode, Integer rooms, Integer baths, Integer size, Integer price) {
        this.title = title;
        this.description = description;
        this.publishDate = publishDate;
        this.city = city;
        this.postalCode = postalCode;
        this.rooms = rooms;
        this.baths = baths;
        this.size = size;
        this.price = price;
    }}
