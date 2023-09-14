package com.factoriaAltF4.Nesting.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "images")
@Data
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "img")
    private String img;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "properties_id")
    private Property property;
}
